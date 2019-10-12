import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loading = true;
    this.user = this.authenticationService.currentUserValue;
    this.loading = false;
  }

}
