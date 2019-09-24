import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalcComponent } from './tip-calc/tip-calc.component';
import { CostSplitterComponent } from './cost-splitter/cost-splitter.component';
import { InvestmentCalcComponent } from './investment-calc/investment-calc.component';
import { LoanCalcComponent } from './loan-calc/loan-calc.component';
import { SavingsCalcComponent } from './savings-calc/savings-calc.component';
import { MatRadioModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    TipCalcComponent,
    CostSplitterComponent,
    InvestmentCalcComponent,
    LoanCalcComponent,
    SavingsCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
