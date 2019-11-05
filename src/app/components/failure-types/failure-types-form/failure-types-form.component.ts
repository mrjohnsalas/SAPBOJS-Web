import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FailureTypeService } from 'src/app/_services/failure-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FailureType } from '../../../_models/failure-type';
import { SpinnerType } from '../../../_models/spinner-type.enum';
import { CanDeactivateRoute } from 'src/app/_helpers/lose-changes.guard';
import swal from 'sweetalert';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-failure-types-form',
  templateUrl: './failure-types-form.component.html',
  styleUrls: ['./failure-types-form.component.scss']
})
export class FailureTypesFormComponent implements OnInit, CanDeactivateRoute {

  editMode = false;
  formGroup: FormGroup;
  isLoadingData = false;
  spinnerType = SpinnerType;
  id: number;
  saved = false;

  constructor(
    private formBuilder: FormBuilder,
    private failureTypeService: FailureTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get name() {
    return this.formGroup.get('name');
  }

  get description() {
    return this.formGroup.get('description');
  }

  canExit(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.saved) { return true; }

    return swal({
      title: '¿Estás seguro?',
      text: '¿Quieres salir del formulario y perder los cambios?',
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Cancelar',
          value: false,
          className: '',
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: 'Salir',
          value: true,
          className: '',
          visible: true,
          closeModal: true
        }
      },
    }).then( (val) => val );
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      description: ['', [Validators.maxLength(100)]]
    });

    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) { return; }
      this.isLoadingData = true;
      this.editMode = true;
      this.id = params.id;
      this.failureTypeService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    });

  }

  onLoadForm(obj: FailureType) {
    this.formGroup.patchValue({
      name: obj.name,
      description: obj.description
    });
  }

  submit() {
    this.saved = true;

    if (!this.formGroup.valid) {
      alert('Error');
      return;
    }

    this.isLoadingData = true;

    const failureType: FailureType = Object.assign({}, this.formGroup.value);

    if (this.editMode) {
      failureType.id = this.id;
      this.failureTypeService.update(failureType).subscribe(
        obj => this.onSaveSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    } else {
      this.failureTypeService.create(failureType).subscribe(
        obj => this.onSaveSuccess(obj),
        error => this.onError(error),
        () => this.stopLoading()
      );
    }
  }

  onSaveSuccess(obj: FailureType) {
    this.stopLoading();
    this.router.navigate(['/failuretypes']);
  }

  onError(error: any) {
    this.stopLoading();
    this.saved = false;
    console.error(error);
  }

  stopLoading() {
    this.isLoadingData = false;
  }

}
