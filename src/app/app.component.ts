import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{

  title = 'ScooTeq';
  price = 0
  ngOnInit(){
    this.incrementPrice()
  }
  incrementPrice(){
    this.price += 0.15;
    // console.log("this.price ", this.price.toFixed(2))

    setTimeout(() => {
      this.incrementPrice()

    }, 1000);
    // setTimeout(this.incrementPrice,2000);
  
  }
}
