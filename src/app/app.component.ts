import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ScooTeq';
  price = 0
}
