import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { interval } from 'rxjs';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class MainPageComponent implements OnInit {
  
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;



  constructor(public authService: AuthenticationServiceService) {
   interval(10).subscribe(
            () => {
               this.isAuthenticated = this.authService.getIsAuth();
                this.isAdmin = this.authService.isAdmin();
            },
            (error: any) => {
              console.log('error');
            }
          );
   }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.getIsAuth();
    this.isAdmin = this.authService.isAdmin();
     console.log(this.isAuthenticated,this.isAdmin)
  }


  onLogoutClick() {
  this.authService.logout();

   this.isAdmin =false ;
    this.isAuthenticated = false;
  }
}
