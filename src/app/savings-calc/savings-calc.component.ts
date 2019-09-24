import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-savings-calc',
  templateUrl: './savings-calc.component.html',
  styleUrls: ['./savings-calc.component.css'],
})

export class SavingsCalcComponent implements OnInit {
  answer: string;
  x: number;
  deposit: number;
  apy: number;
  constructor() { }

  ngOnInit() {
  }

  calculate(){
    const initial: number = Number($("#init").val());
    this.deposit = Number($("#monthly").val());
    const period: number = Number($("#period").val());
    const n: string = String($("#b").val());
    this.apy = Number($("#interest").val()) / 100;
    this.x = initial;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    if (n === "months") {
      for (let i = 0; i < period; i++){
        this.addMoney();
      }
    } else if (n === "years") {
      for (let i = 0; i < period * 12; i++){
        this.addMoney();
      }
    }
    this.answer = formatter.format(this.x);
  }

  addMoney(){
    this.x += this.x * (this.apy*(30/365));
    this.x = Math.ceil(this.x * 100) / 100;
    this.x += this.deposit;
    this.x = Math.ceil(this.x * 100) / 100;
  }

}
