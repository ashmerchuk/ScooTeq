import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http'

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
  isProducts = false;
  isTestingDrive = false;
  isTrip = false;
  isCalculateElectricity = false;

  TripOn(){
    this.isTestingDrive = false;
    this.isProducts = false;
    this.isTrip = true;
    this.isCalculateElectricity = false;
  }
  CalculateElectricityOn(){
    this.isTestingDrive = false;
    this.isProducts = false;
    this.isTrip = false;
    this.isCalculateElectricity = true;
  }
  ProductsOn(){
    this.isTestingDrive = false;
    this.isProducts = true;
    this.isTrip = false;
    this.isCalculateElectricity = false;
  }
  TestingDriveOn(){
    this.isTestingDrive = true;
    this.isProducts = false;
    this.isTrip = false;
    this.isCalculateElectricity = false;
  }
  MainScreenOn(){
    this.isTestingDrive = false;
    this.isProducts = false;
    this.isTrip = false;
    this.isCalculateElectricity = false;
  }
}
