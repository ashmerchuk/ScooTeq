import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';


@NgModule({
  declarations: [
    CalculatorPageComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  exports: [
    CalculatorPageComponent
  ]
})
export class CalculatorModule { }
