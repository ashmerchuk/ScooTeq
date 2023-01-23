import { Component, OnInit } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { DeviceItem, VoltageOutput } from './model/calculator.model'
import { MatDialog } from '@angular/material/dialog'
import { DeviceItemFormularComponent } from './device-item-formular/device-item-formular.component'

@Component({
  selector: 'app-devices-consume-calculator',
  templateUrl: './devices-consume-calculator.component.html',
  styleUrls: ['./devices-consume-calculator.component.scss'],
})
export class DevicesConsumeCalculatorComponent implements OnInit {
  public conditionsForm!: UntypedFormGroup;
  public voltageList: VoltageOutput[] = ['110V', '220V', '440V'];
  public deviceList: DeviceItem[] = [];

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.conditionsForm = this._formBuilder.group({
      voltageOutput: [null, [Validators.required]],
      kwhCost: [null, [Validators.required]],
      weeklyWorkHours: [null, [Validators.required]],
      evaluatedPeriod: [null, [Validators.required]],
    })
  }

  public addDeviceItem(): void {
    let dialogRef = this._dialog.open(DeviceItemFormularComponent, { data: null });
    dialogRef.afterClosed().subscribe((item) =>{
      if(item) this.deviceList.push(item);
    })
  }

  public editDeviceItem(item: DeviceItem): void {
    let dialogRef = this._dialog.open(DeviceItemFormularComponent, { data: item })
    dialogRef.afterClosed().subscribe((item) =>{
      if(item) {
        // let index = 
      }
    })
  }

  public removeDeviceItem(item: DeviceItem):void {
    this.deviceList = this.deviceList.filter(device => device.id != item.id);
  }

}
