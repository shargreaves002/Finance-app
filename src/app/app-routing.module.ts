import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipCalcComponent } from './tip-calc/tip-calc.component';
import { CostSplitterComponent } from './cost-splitter/cost-splitter.component';
import { InvestmentCalcComponent } from './investment-calc/investment-calc.component';
import { LoanCalcComponent } from './loan-calc/loan-calc.component';
import { SavingsCalcComponent } from './savings-calc/savings-calc.component';


const routes: Routes = [{path:"tip-calc", component: TipCalcComponent},
                        {path: "cost-splitter", component: CostSplitterComponent},
                        {path: "investment-calc", component: InvestmentCalcComponent},
                        {path: "loan-calc", component: LoanCalcComponent},
                        {path: "savings-calc", component: SavingsCalcComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
