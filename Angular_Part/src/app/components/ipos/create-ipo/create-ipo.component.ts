import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IpoService } from 'src/app/services/ipo.service';
import {IPO} from '../../../models/ipo';
@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {
   ipo1: IPO = {
      companyName: '',
      stockExchangeName: '',
      pricePerShare: 0,
      totalNumberOfShares: 0,
      openDateTime: '',
      remarks: ''
    };

 constructor(private ipoService: IpoService) { }

   ngOnInit(): void {
   }

   onSubmit({value, valid}: NgForm) {
     if(!valid) {

     }
     else {
       this.ipoService.addIpo(value);
     }
   }

}
