import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ServiceException } from 'src/app/_models/service-exception';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { AppSettingsService } from '../../_services/app-settings.service';
import { AppHelperService } from '../../_services/app-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  isLoadingData = false;
  serviceException: ServiceException;
  emailMaxLength: 256;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private authenticationService: AuthenticationService,
    public appSettingsService: AppSettingsService,
    private appHelperService: AppHelperService) {
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('gray-bg');

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(this.emailMaxLength)]],
      password: ['', [Validators.required]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('gray-bg');
  }

  submit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      alert('Error');
      return;
    }

    this.isLoadingData = true;

    this.authenticationService.login(this.email.value, this.password.value).subscribe(
      obj => this.onSuccess(obj),
      error => this.onError(error),
      () => this.stopLoading()
    );
  }

  onSuccess(obj: User) {
    this.stopLoading();
    this.ngZone.run(() => {
      this.router.navigate([this.returnUrl]);
    });
  }

  onError(errorResponse: HttpErrorResponse) {
    this.stopLoading();
    this.serviceException = this.appHelperService.getServiceExceptionObject(errorResponse);
  }

  stopLoading() {
    this.isLoadingData = false;
  }
}
