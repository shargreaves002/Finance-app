import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-splitter',
  templateUrl: './cost-splitter.component.html',
  styleUrls: ['./cost-splitter.component.css']
})
export class CostSplitterComponent implements OnInit {
  answer: string;
  constructor() { }

  ngOnInit() {
  }

  onClick(amount: number, people: number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    if (people % 1 != 0 || people < 1) {
      this.answer = "Please enter a whole number of people greater than 0.";
    } else {
      this.answer = formatter.format(Math.round((amount / people) * 100) / 100);
    }
  }
}
