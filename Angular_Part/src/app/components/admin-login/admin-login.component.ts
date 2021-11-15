import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../../models/user'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
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
  }

  //onSubmit(){
 // console.log("success");
  
  //}

  onSubmit({value, valid}: NgForm) {
    this.isLoading = true;
    this.username=value.username;
    this.password=value.password;
//     console.log(this.username, this.password)
    this.authService.login(this.username, this.password);


  }




}
