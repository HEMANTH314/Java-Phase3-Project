import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {Company} from '../../models/company'
import { CompanyService } from '../../services/company.service';
@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  companies!: Company[];

  constructor(private http: HttpClient,private companyService: CompanyService,private router: Router) { }

  ngOnInit(): void {
    this.companyService.getCompanies()
      .subscribe((response) => {
        console.log(response);
        this.companies = response;
      });
  }

  onDeleteClick(id: string) {
    this.companyService.deleteCompany(id );
    this.router.navigate(['/managecompany']);
  }
  
}
