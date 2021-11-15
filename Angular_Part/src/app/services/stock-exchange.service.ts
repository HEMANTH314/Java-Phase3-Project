import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/stock-exchange';
import { Company } from '../models/company';


@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {
  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/stockExchanges/';
  }

  getStockExchanges(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.url);
  }

  getStockExchange(id: string): Observable<StockExchange> {
    return this.http.get<StockExchange>(this.url + id);
  }

  getStockExchangeCompanies(id: string): Observable<Company[]> {
    return this.http.get<Company[]>(this.url + id + "/companies");
  }

  addStockExchange(stockExchange: StockExchange) {
    this.http.post<StockExchange>(this.url, stockExchange)
      .subscribe((responseData) => {
        console.log(responseData);
        this.router.navigate(['/stock-exchanges']);
      });
  }

  updateStockExchange(stockExchange: StockExchange) {
    this.http.put(this.url, stockExchange)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/stock-exchanges']);
      });
  }

  deleteStockExchange(id: string) {
    this.http.delete(this.url + id)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/stock-exchanges']);  
      });
  }

}
