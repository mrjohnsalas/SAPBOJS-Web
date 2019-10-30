import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FailureTypeService } from 'src/app/_services/failure-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-failure-types-form',
  templateUrl: './failure-types-form.component.html',
  styleUrls: ['./failure-types-form.component.scss']
})
export class FailureTypesFormComponent implements OnInit {

  formGroup: FormGroup;
  editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private failureTypeService: FailureTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: '',
      description: ''
    });

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.editMode = true;
      } else {
        return;
      }
    });
  }

  submit() {

  }

  cancel() {

  }

}
