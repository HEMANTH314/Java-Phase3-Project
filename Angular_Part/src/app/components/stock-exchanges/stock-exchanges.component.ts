import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { StockExchange } from '../../models/stock-exchange';
import { StockExchangeService } from '../../services/stock-exchange.service';
@Component({
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.css']
})
export class StockExchangesComponent implements OnInit {
 stockExchanges!: StockExchange[];

  constructor(private http: HttpClient,private router: Router,private stockExchangeService: StockExchangeService) { }

  ngOnInit(): void {
    this.stockExchangeService.getStockExchanges()
      .subscribe(response => {
        console.log(response);
        this.stockExchanges = response;
      });
  }

  onDeleteClick(id: string) {
    this.stockExchangeService.deleteStockExchange(id);
  }
}
