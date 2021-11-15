import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import {IPO} from '../models/ipo';
import {Company} from '../models/company';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url: string;
  constructor(private http: HttpClient, private router: Router) {
     this.url = 'http://localhost:8080/company-service/companies/';
  }

    getCompanies(): Observable<Company[]> {
      return this.http.get<Company[]>(this.url);
    }

    getCompany(id: string): Observable<Company> {
      return this.http.get<Company>(this.url + id);
    }

//     getCompanyIpoDetails(id: string): Observable<IPO> {
//       return this.http.get<IPO>(this.url + id + "/ipos");
//     }
//
    addCompany(company: Company) {
      this.http.post<Company>(this.url, company)
        .subscribe((responseData) => {
          console.log(responseData);
          this.router.navigate(['/managecompany']);
        });
    }

    updateCompany(company: Company) {
      this.http.put(this.url, company)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/managecompany']);
        });
    }

    deleteCompany(id: string) {
      this.http.delete(this.url + id)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/adminLandingPage']);
          this.router.navigate(['/managecompany']);
        });
    }
}
