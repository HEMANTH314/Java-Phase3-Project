import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { StockExchange } from 'src/app/models/stock-exchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-edit-stock-exchange',
  templateUrl: './edit-stock-exchange.component.html',
  styleUrls: ['./edit-stock-exchange.component.css']
})
export class EditStockExchangeComponent implements OnInit {
  stockExchange : StockExchange={
    id :1,
    name:'',
    description:'',
    address:'',
    remarks:''
  }
  Id!:string;
  constructor(private stockExchangeService: StockExchangeService,  private route: ActivatedRoute) { 
    this.route.params.subscribe(event => {
      this.Id = event.Id;

     });
  this.stockExchangeService.getStockExchange(this.Id).subscribe(x => this.stockExchange =x)
  }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: NgForm) {
    if(!valid) {
    }
    else{
      this.stockExchangeService.updateStockExchange(this.stockExchange);
    }
  }

}
