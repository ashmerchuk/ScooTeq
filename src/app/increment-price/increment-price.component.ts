import { Component , OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {DialogPriceComponent} from "../dialog-price/dialog-price.component";

import { DataService } from '../data.service';


@Component({
  selector: 'app-increment-price',
  templateUrl: './increment-price.component.html',
  styleUrls: ['./increment-price.component.scss']
})
export class IncrementPriceComponent implements OnInit{



  constructor(private dialogRef : MatDialog,private dataService: DataService){}
  isStart = false
  isStop = false
  timeoutId: any;
  isPause = false
  price = 0

  fromPoint : string | undefined
  toPoint : string | undefined

  distanceInKm : number | undefined

  ngOnInit(): void{
    // this.incrementPrice()

    this.fromPoint = this.dataService.getData('fromPoint')
    this.toPoint = this.dataService.getData('toPoint')
    this.distanceInKm = this.dataService.getData('distanceInKm')


  }
  changeStatusStart(){
    if(!this.isStart){
      this.isStart = true
      this.incrementPrice()

    }else{
      this.isStart = false
      this.isStop = true
      this.price = Math.round(this.price * 100) / 100

     console.log(" this.price  stop", this.price)

      this.price.toFixed(2)
      clearTimeout(this.timeoutId)
      this.dialogRef.open(DialogPriceComponent, {
        data:{
          price: this.price
        }
      })
    }
  }
  incrementPrice(){
    this.price += 0.05;
    this.timeoutId = setTimeout(() => {
      this.incrementPrice()

    }, 300);
  return this.timeoutId
  }
  pausePrice(){
    if(!this.isPause){
      this.isPause = true
      console.log(" this.pausePriceVar T ",this.price)
      clearTimeout(this.timeoutId)
    }else{
      this.isPause = false
      this.incrementPrice()
    }
  }

  calculateTimeToDoneTrip(distance : number){

    return Math.round(distance / 10 * 60 )
  }
}
