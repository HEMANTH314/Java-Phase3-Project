import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { StockExchange } from '../../../models/stock-exchange';
import { StockExchangeService } from '../../../services/stock-exchange.service';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {

  stockExchange: StockExchange = {
      name: '',
      description: '',
      address: '',
      remarks : ''
    };

  constructor(private stockExchangeService: StockExchangeService) { }

  ngOnInit(): void {
  }
   onSubmit({value, valid}: NgForm) {
      if(!valid) {
      }
      else{
            this.stockExchangeService.addStockExchange(value);
      }
    }



}
