import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {User} from '../../models/user'
import {NgForm} from '@angular/forms';

import { Subscription } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
   isLoading!: boolean;
   private authStatusSubs!: Subscription;
   user: User = {
      username: '',
      password: '',
      email: ''
    };
  constructor(public authService: AuthenticationServiceService) { }

  ngOnInit(): void {
  }
 onSubmit({value, valid}: NgForm) {

    this.isLoading = true;
    this.authService.createUser(value);
  }
  ngOnDestroy(): void {
    this.authStatusSubs.unsubscribe();
  }

}
