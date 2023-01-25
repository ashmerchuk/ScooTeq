import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  isStart = false

  title = 'ScooTeq';
  price = 0;
  pausePriceVar = 0;
}
