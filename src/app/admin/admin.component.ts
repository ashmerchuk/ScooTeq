import { Component, OnInit } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


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

  chargeSmalScooter(){
    this.battery.batteryStatus = 1200

    axios.post("http://localhost:8690/saveBattery", this.battery).then(re => {
      console.log("save Battery", this.battery)
    }).catch(er => {
      console.log("er")
    });

    console.log("charge smal Scooter")
  }

  chargeBikeScooter(){
      this.battery.bikeBatteryStatus = 1200
      axios.post("http://localhost:8690/saveBattery", this.battery).then(re => {
        console.log("save Battery", this.battery)
      }).catch(er => {
        console.log("er")
      });

      console.log("charge bike Scooter")
  }
}
