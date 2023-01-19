import { Component } from '@angular/core';

@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.scss']
})
export class MapApiComponent {


  locatorButtonPressed(){
      if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
        },
        error => {
          console.log(error.message)
        }
        )
        console.log()
      }else{
        console.log("Browser")
      }
  }

}
