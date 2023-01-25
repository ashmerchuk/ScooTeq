import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceItem } from '../model/calculator.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent implements OnInit {
  @Input() device!: DeviceItem;
  public totalItemConsume!: number;

  @Output() editDevice = new EventEmitter<DeviceItem>();
  @Output() deleteDevice = new EventEmitter<DeviceItem>();

  ngOnInit(): void {
      if(this.device) this.totalItemConsume = this.device.amount * this.device.consume;
  }

  public onEdit():void {
    this.editDevice.emit(this.device);
  }

  public onDelete():void {
    this.deleteDevice.emit(this.device);
  }


}
