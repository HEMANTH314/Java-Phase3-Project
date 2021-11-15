import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {Company} from '../../../models/company';
import { CompanyService } from '../../../services/company.service';
@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
    company: Company = {
        id:2,
        companyName: '',
        code: '',
        turnover: '',
        ceo: '',
        boardOfDirectors: '',
        sectorName: '',
        companyBrief: ''
      };
     Id!:string;
  constructor(private companyService: CompanyService,  private route: ActivatedRoute) {
     this.route.params.subscribe(event => {
        this.Id = event.Id;

       });
    this.companyService.getCompany(this.Id).subscribe(x => this.company =x)
  }

 ngOnInit() {

     }
  onSubmit({value, valid}: NgForm) {
      if(!valid) {
      }
      else{
         this.companyService.updateCompany(this.company);
      }
   }
}
