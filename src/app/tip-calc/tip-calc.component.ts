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

  onClick(amount: number, tip: number) {
    if (tip < 0 || tip > 100) {
      this.answer = "Please tip between 0% and 100%.";
    } else {
      this.answer = Math.round((amount * (tip / 100)) * 100) / 100;
    }
  }

}
