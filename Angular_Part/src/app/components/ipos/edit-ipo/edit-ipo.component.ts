import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IPO } from 'src/app/models/ipo';
import { IpoService } from 'src/app/services/ipo.service';

@Component({
  selector: 'app-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css']
})
export class EditIPOComponent implements OnInit {
  ipo1 : IPO = {
    id: 1,
    companyName: '',
    stockExchangeName: '',
    pricePerShare: 1,
    totalNumberOfShares: 1,
    openDateTime: '',
    remarks: ''
  };
  Id!:string;
  constructor(private ipoService: IpoService,  private route: ActivatedRoute) {
     this.route.params.subscribe(event => {
        this.Id = event.Id;

       });
    this.ipoService.getIpo(this.Id).subscribe(x => this.ipo1 =x)
  }
  ngOnInit(): void {
  }
  onSubmit({value, valid}: NgForm) {
    if(!valid) {
    }
    else{
      this.ipoService.updateIpo(this.ipo1);
    }
    
    }
}
