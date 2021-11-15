import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Company} from '../../../models/company';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

   company: Company = {
     companyName: '',
     code: '',
     turnover: '',
     ceo: '',
     boardOfDirectors: '',
     sectorName: '',
     companyBrief: ''
   };

   constructor(private companyService: CompanyService) { }

   ngOnInit(): void {
   }

    onSubmit({value, valid}: NgForm) {
      if(!valid) {
      }
      else{
          this.companyService.addCompany(value);
      }
     }

}
