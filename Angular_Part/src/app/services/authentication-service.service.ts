import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import {LoginData } from 'src/app/models/login-data';
import { MainPageComponent } from 'src/app/components/main-page/main-page.component'
const BACKEND_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
 private isAuthenticated = false;
  private admin = false;
//   private token: string;
//   private tokenTimer: any;
  private username!: string;
  private authStatusListener = new Subject<boolean>();
  logina: any;

  constructor(public http: HttpClient, private router: Router) {}

  mp!:MainPageComponent;

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUsername() {
    return this.username;
  }

  isAdmin() {
    return this.admin;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(user: User) {
    return this.http.post<User>(BACKEND_URL + '/signup', user)
      .subscribe((responseData) => {
        console.log(responseData);
        this.router.navigate(['/userlogin']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  login(username: string, password: string) {
    const loginData: LoginData = {
      username: username,
      password: password
    };
    console.log(loginData);
    this.http.post<{ username: string, admin: boolean, confirmed:boolean}>
      (BACKEND_URL + '/login', loginData)
      .subscribe(response => {
        console.log(response);
        if(response.confirmed) {


          this.isAuthenticated = true;
          this.admin = response.admin;
          this.username = response.username;

          this.saveAuthData( this.username, this.admin);
          console.log(this.username, this.admin);
          this.authStatusListener.next(true);
          //this.router.navigate(['/adminLandingPage']);
          this.router.navigate(['/']);

        }
      }, error => {
        console.log(error);
        this.authStatusListener.next(false);
      });
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if(!authInformation) {
      return;
    }


      this.username = authInformation.username+'';
      this.admin = authInformation.admin;

      this.authStatusListener.next(true);

  }

  logout() {

    this.isAuthenticated = false;
    this.admin = false;
    this.authStatusListener.next(false);

    this.clearAuthData();
    this.username = '';
    this.router.navigate(['/']);
  }



  private saveAuthData( username: string, admin: boolean) {

    localStorage.setItem('username', username);
    if(admin) {
      localStorage.setItem('admin', "admin");
    }
  }

  private clearAuthData() {

    localStorage.removeItem('username');
    localStorage.removeItem('admin');
  }

  private getAuthData() {
    const username = localStorage.getItem('username');
    const admin = localStorage.getItem('admin') ? true : false;
    if(username) {
      return;
    }
    return {

      username: username,
      admin: admin
    };
  }



}
