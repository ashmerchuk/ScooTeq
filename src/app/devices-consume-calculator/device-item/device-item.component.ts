import { Component, Input } from '@angular/core';
import { DeviceItem } from '../model/calculator.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.scss']
})
export class DeviceItemComponent {
  @Input() device!: DeviceItem;


}
