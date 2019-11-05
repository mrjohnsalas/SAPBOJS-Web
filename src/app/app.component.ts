import { Component, AfterViewInit } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';

declare function metisMenuInit(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  currentUser: User;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngAfterViewInit(): void {
    metisMenuInit();
  }

}
