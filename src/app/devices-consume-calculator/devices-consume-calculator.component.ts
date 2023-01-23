import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

export type VoltageOutput = '110V' | '220V' | '440V'

@Component({
  selector: 'app-devices-consume-calculator',
  templateUrl: './devices-consume-calculator.component.html',
  styleUrls: ['./devices-consume-calculator.component.scss']
})
export class DevicesConsumeCalculatorComponent {
  conditionsForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder){ }

  ngOnInit() {
    this.conditionsForm = this.formBuilder.group({
      voltageOutput: [null, [Validators.required]],
      kwhCost: [null, [Validators.required]],
      weeklyWorkHours: [null, [Validators.required]],
      evaluatedPeriod: [null, [Validators.required]],
    })
  }

  voltageList: VoltageOutput[] = ['110V' , '220V' , '440V' ];


}
