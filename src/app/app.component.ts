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
  pausePriceVar = 0

  changeStatusStart(){
    if(!this.isStart){
      this.isStart = true

    }else{
      this.isStart = false
    }
  }

  pausePrice(){
    
    this.pausePriceVar = this.price

    console.log(" this.pausePriceVar ",this.pausePriceVar)
  }
  // ngOnInit(){
  //   this.incrementPrice()
  // }
  // incrementPrice(){
  //   this.price += 0.15;
  //   // console.log("this.price ", this.price.toFixed(2))

  //   setTimeout(() => {
  //     this.incrementPrice()

  //   }, 1000);
  //   // setTimeout(this.incrementPrice,2000);
  
  // }
}
