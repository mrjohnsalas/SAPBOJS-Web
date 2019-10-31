import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('gray-bg');

    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('gray-bg');
  }

  public get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value).subscribe(
      data => {
        this.ngZone.run(() => {
          this.router.navigate([this.returnUrl]);
        });
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }
}
