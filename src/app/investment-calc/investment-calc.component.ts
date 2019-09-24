import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-investment-calc',
  templateUrl: './investment-calc.component.html',
  styleUrls: ['./investment-calc.component.css']
})
export class InvestmentCalcComponent implements OnInit {
  answer: string;
  x: number;
  constructor() { }

  ngOnInit() {
  }

  calculate() {
    let time: number = Number($("#time").val());
    let init: number = Number($("#init").val());
    let deposit: number = Number($("#periodic").val());
    let compound: string = String($("#compound").val());
    let interest: number = Number($("#interest").val()) / 100;
    this.x = init;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    if (compound === "year") {
      for (let i = 0; i < time; i++) {
        this.x += this.x * interest;
        this.x += deposit * 12;
      }
    } else if(compound === "semi") {
      for (let i = 0; i < time * 2; i++){
        this.x += this.x * interest / 2;
        this.x += deposit * 6;
      }
    }else if (compound === "quarter") {
      for (let i = 0; i < time * 4; i++){
        this.x += this.x * interest / 4;
        this.x += deposit * 4;
      }
    } else if (compound === "month") {
      for (let i = 0; i < time * 12; i++) {
        this.x += this.x * interest / 12;
        this.x += deposit;
      }
    } else if (compound === "day") {
      for (let i = 0; i < time; i++){
        for (let j = 1; j < 13; j++){
          if ((j < 8 && j % 2 === 1) || (j >= 8 && j % 2 === 0)) {
            this.x += (this.x * interest / 365) * 31;
          } else if (j == 2) {
            this.x += (this.x * interest / 365) * 28;
          } else {
            this.x += (this.x * interest / 365) * 30;
          }
          this.x = this.x + deposit;
        }
      }
    }
    this.answer = formatter.format(Math.round(this.x * 100) / 100);
  }
}
