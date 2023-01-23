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
  public navPagesDefault = {isProducts: false, isTestingDrive: false,  isTrip: false,  isCalculateElectricity : false };
  public navPagesUpdated = {...this.navPagesDefault};


  TripOn(){
    this.navPagesUpdated = {...this.navPagesDefault};
    this.navPagesUpdated.isTrip = true;
  }
  CalculateElectricityOn(){
    this.navPagesUpdated = {...this.navPagesDefault};
    this.navPagesUpdated.isCalculateElectricity = true;
  }
  ProductsOn(){
    this.navPagesUpdated = {...this.navPagesDefault};
    this.navPagesUpdated.isProducts = true;

  }
  TestingDriveOn(){
    this.navPagesUpdated = {...this.navPagesDefault};
    this.navPagesUpdated.isTestingDrive = true;
  }
  MainScreenOn(){
    this.navPagesUpdated = {...this.navPagesDefault};
  }
}
