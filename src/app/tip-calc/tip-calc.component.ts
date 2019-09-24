import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calc.component.html',
  styleUrls: ['./tip-calc.component.css']
})
export class TipCalcComponent implements OnInit {
  answer = null;
  constructor() { }

  ngOnInit() {
  }

  calculate(amount: number, tip: number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    if (tip < 0) {
      this.answer = "Please tip a positive percentage";
    } else {
      this.answer = formatter.format(Math.round((amount * (tip / 100)) * 100) / 100);
    }
  }

}
