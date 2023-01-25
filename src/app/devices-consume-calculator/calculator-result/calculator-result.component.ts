import { Component, Input } from '@angular/core';
import { CalculatorConditions, DeviceItem } from '../model/calculator.model';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss']
})
export class CalculatorResultComponent {
  public totalKwh: number = 0;
  public totalCost: number = 0;

  public conditions!: CalculatorConditions | null;
  @Input() set calculatorConditions(value: CalculatorConditions){
    if(!value.evaluatedPeriod || !value.weeklyWorkHours || !value.kwhCost) this.conditions = null;
    else {
      this.conditions = value;
      this.calculateCost();
    }
  }

  public devices!: DeviceItem[];
  @Input() set deviceList(value: DeviceItem[]){
    this.devices = value;
    this.calculateCost();
  }

  private calculateCost():void {
    if(!this.conditions || this.devices.length === 0) return;
    this.totalKwh = this.devices.reduce((total, item) => total + this.getDeviceItemConsume(item), 0) / 1000;
    this.totalCost = this.totalKwh * this.conditions.kwhCost * this.conditions.weeklyWorkHours * this.conditions.evaluatedPeriod;
  }

  private getDeviceItemConsume(item: DeviceItem):number {
    return item.consume * item.amount;
  }


}
