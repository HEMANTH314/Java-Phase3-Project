
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../models/user'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

   isLoading = false;
    private authStatusSubs!: Subscription;
    username!: string;
    password!: string;
  user: User = {
        username: '',
        password: '',
        email: ''
      };
    constructor(public authService: AuthenticationServiceService,  private router: Router) { }

    ngOnInit(): void {
      this.authStatusSubs = this.authService.getAuthStatusListener()
        .subscribe(authStatus => {
          this.isLoading = false;
        });
    }

    onSubmit({value, valid}: NgForm) {
      this.isLoading = true;
      this.username=value.username;
      this.password=value.password;
//     console.log(this.username, this.password)
      this.authService.login(this.username, this.password);


    }

    ngOnDestroy(): void {
      this.authStatusSubs.unsubscribe();
    }
}
