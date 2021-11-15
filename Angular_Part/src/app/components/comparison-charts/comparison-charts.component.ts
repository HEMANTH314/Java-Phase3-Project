//import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

import { Comparison } from '../../models/Comparison';
import { StockPriceService } from '../../services/stock-price.service';

@Component({
  selector: 'app-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  styleUrls: ['./comparison-charts.component.css']
})
export class ComparisonChartsComponent implements OnInit {
  chart: any = [];
  comparison: any = {
      name: '',
      stockExchangeName: '',
      fromPeriod: '',
      toPeriod: '',
      periodicity: ''
    }
    
  ngOnInit(): void {
  }
  onSubmit({value, valid}: NgForm) {

  }
  
}
