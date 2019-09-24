import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-loan-calc',
  templateUrl: './loan-calc.component.html',
  styleUrls: ['./loan-calc.component.css']
})
export class LoanCalcComponent implements OnInit {
  answer: string;
  constructor() { }

  ngOnInit() {
  }

  calculate() {
    let init: number = Number($("#init").val());
    let term: number = Number($("#term").val());
    let n: string = String($("#b").val());
    let int: number = Number($("#interest").val()) / 100;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    if (n === "years") {
      term *= 12;
    }
    let x: number = ((int/12)*init)/(1- (Math.pow((1 + int/12), -term)));
    this.answer = formatter.format(Math.ceil(x * 100) / 100);
  }
}
