import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}


  battery = {
    id: 0,
    batteryStatus: 100,
    bikeBatteryStatus: 100
  }

  ngOnInit(): void {

    axios.get("http://localhost:8690/getBattery").then(response => {
      this.battery = response.data

    })

  }

  chargeSmallScooter(){
    this.battery.batteryStatus = 1200

    axios.post("http://localhost:8690/saveBattery", this.battery).then(re => {
      console.log("save Battery", this.battery)
    }).catch(er => {
      console.log("er")
    });
    this._snackBar.open("E-Scooter has charged to 100% of Battery", "Close",{
      duration: 2000,
    });
    console.log("charge small Scooter")
  }

  chargeBikeScooter(){
      this.battery.bikeBatteryStatus = 1200
      axios.post("http://localhost:8690/saveBattery", this.battery).then(re => {
        console.log("save Battery", this.battery)
      }).catch(er => {
        console.log("er")
      });
     this._snackBar.open("E-Bike has charged to 100% of Battery","Close",{
       duration: 2000,
     });
      console.log("charge bike Scooter")
  }

  playChargingSound(){
    let audio = new Audio();
    audio.src = "../assets/audio/ChargingSound.mp3";
    audio.load();
    audio.play();
  }
}
