import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogPriceComponent } from "../dialog-price/dialog-price.component";
import axios from 'axios';

import { DataService } from '../data.service';
interface Battery {
  id: number
  batteryStatus: number
}

@Component({
  selector: 'app-increment-price',
  templateUrl: './increment-price.component.html',
  styleUrls: ['./increment-price.component.scss']
})
export class IncrementPriceComponent implements OnInit {



  constructor(private dialogRef: MatDialog, private dataService: DataService) { }
  isStart = false
  isStop = false
  timeoutId: any;
  timeoutIdBattery: any;
  isPause = false
  price = 0
  batteryFull = 1200

  fromPoint: string | undefined
  toPoint: string | undefined

  distanceInKm: number | undefined
  batteryPercent: number | undefined
  priceProMinute: number | undefined
  curBattery: number | undefined

  battery = {
    id: 0,
    batteryStatus: 100,
    bikeBatteryStatus: 100
  }



  ngOnInit(): void {
    // this.incrementPrice()
    // this.batteryPercent = 100

    axios.get("http://localhost:8690/getBattery").then(response => {
      this.battery = response.data

      if(this.dataService.getData('scooterType') == 'bike'){
        this.batteryPercent = this.battery.bikeBatteryStatus / 1200 * 100
        console.log("bike")
      }else{
        this.batteryPercent = this.battery.batteryStatus / 1200 * 100
      }


    })
    this.priceProMinute = this.dataService.getData('priceProMinute')

    this.isStart = true
    this.fromPoint = this.dataService.getData('fromPoint')
    this.toPoint = this.dataService.getData('toPoint')
    this.distanceInKm = this.dataService.getData('distanceInKm')

    this.incrementPrice()
    this.batteryConsume()
  }

  batteryConsume() {
    if (this.batteryPercent)
      this.batteryPercent -= 1

    this.timeoutIdBattery = setTimeout(() => {
      this.batteryConsume()
    }, 3000)

    return this.timeoutIdBattery
  }
  changeStatusStart() {
    if (!this.isStart) {
      this.isStart = true
      this.incrementPrice()
      this.batteryConsume()

    } else {
      this.isStart = false
      this.isStop = true
      this.price = Math.round(this.price * 1000) / 1000


      // let batteryObject = {
      //   id: 0,
      //   batteryStatus: 100,
      //   bikeBatteryStatus:100
      // }


      // let batteryObject = this.battery
      if (this.curBattery) {
        console.log("this.dataService.getData('scooterType') ",this.dataService.getData('scooterType'))
        if(this.dataService.getData('scooterType') == 'bike'){

          this.battery.bikeBatteryStatus = this.curBattery
        }else{
          this.battery.batteryStatus = this.curBattery


        }



      }

      axios.post("http://localhost:8690/saveBattery", this.battery).then(re => {
        console.log("save Battery", this.battery)
      }).catch(er => {
        console.log("er")
      });


      this.price.toFixed(2)
      clearTimeout(this.timeoutId)
      clearTimeout(this.timeoutIdBattery)
      this.dialogRef.open(DialogPriceComponent, {
        data: {
          price: this.price
        }
      })
    }
  }
  incrementPrice() {
    if (this.priceProMinute)
      this.price += (this.priceProMinute / 60);
    this.timeoutId = setTimeout(() => {
      this.incrementPrice()

    }, 1000);
    return this.timeoutId
  }
  pausePrice() {
    if (!this.isPause) {
      this.isPause = true
      console.log(" this.pausePriceVar T ", this.price)
      clearTimeout(this.timeoutId)
      clearTimeout(this.timeoutIdBattery)
    } else {
      this.isPause = false
      this.incrementPrice()
      this.batteryConsume()
    }
  }

  calculateTimeToDoneTrip(distance: number) {

    return Math.round(distance / 10 * 60)
  }

  currentBattery(percent: number) {

    this.curBattery = this.batteryFull * percent / 100
    return this.batteryFull * percent / 100
  }
  // Electricity consumed
  electricityConsumed(percent: number) {
    return this.batteryFull - (this.batteryFull * percent / 100)
  }
  costOfConsumedElectricity(percent: number) {
    return Math.round((this.electricityConsumed(percent) * 0.0004) * 10000) / 10000
  }
}
