
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {FormControl, FormGroup} from '@angular/forms';

import {ZIPCODES} from '../data/zipcodes'

import * as geolib from 'geolib';

import { DataService } from '../data.service';

import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


interface Address {
  country_code: string;
  zipcode: string;
  place : string;
  state: string;
  state_code: string;
  province: string;
  province_code: string;
  community: string;
  community_code: string;
  latitude: string;
  longitude: string;


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit  {
  constructor(private dataService: DataService,private router: Router) { }


  fromStreet : string | undefined;
  toStreet : string | undefined;

  fromAddress : Address | undefined
  toAddress : Address | undefined

  distanceInKm : number | undefined

myControl = new FormControl();
myControlEnd = new FormControl();
// var tempArray = JSON.parse(JSON.stringify(mainArray));

options = JSON.parse(JSON.stringify(ZIPCODES))
optionsEnd = JSON.parse(JSON.stringify(ZIPCODES))

filteredOptions: Observable<any> | undefined ;
filteredOptionsEnd: Observable<any> | undefined ;


ngOnInit() {



  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(""),
    map(value => this._filter(value))
  );

  this.filteredOptionsEnd = this.myControlEnd.valueChanges.pipe(
    startWith(""),
    map(valueEnd => this._filterEnd(valueEnd))
  );
}

private _filter(value: any) {
  let filterValue = '';
  if (typeof value === "string") {
    filterValue = value.toLowerCase();
  } else {
    filterValue = value.zipcode.toLowerCase();
  }

  return this.options.filter(
    (    option: { zipcode: string; }) => option.zipcode.toLowerCase().indexOf(filterValue) === 0
  );
}


private _filterEnd(value: any) {
  let filterValueEnd = '';
  if (typeof value === "string") {
    filterValueEnd = value.toLowerCase();
  } else {
    filterValueEnd = value.zipcode.toLowerCase();
  }

  return this.optionsEnd.filter(
    (    option: { zipcode: string; }) => option.zipcode.toLowerCase().indexOf(filterValueEnd) === 0
  );
}

// displayFn(value: any) {
//   return value ? value.zipcode : undefined;
// }


selectOption(e: MatAutocompleteSelectedEvent) {
  console.log("e. st ",e)

  const item = e.option.value;
  console.log(item);
  this.fromAddress = item
}

selectOptionEnd(e: MatAutocompleteSelectedEvent) {

  console.log("e. ",e)
  const item = e.option.value;
  console.log("end ",item);

  this.toAddress = item
}

displayFn(address: any) : string {
  return address.zipcode ? address.zipcode + ', '+address.place + ', '+ address.state : ''
}


onSubmit(){


  if(this.fromAddress != undefined && this.toAddress != undefined){
    const firstCoordinate = {latitude: this.fromAddress.latitude , longitude:this.fromAddress.longitude};
    const secondCoordinate = {latitude: this.toAddress.latitude, longitude:this.toAddress.longitude};

    this.distanceInKm = Math.round((geolib.getDistance(firstCoordinate, secondCoordinate) / 1000 + 1.5) * 100) / 100 ;




  console.log(this.distanceInKm );

  this.dataService.setData('fromPoint', this.fromStreet + ', '+this.fromAddress.zipcode + ', '+this.fromAddress.place)
  this.dataService.setData('toPoint', this.toStreet + ', '+this.toAddress.zipcode + ', '+this.toAddress.place)
  this.dataService.setData('distanceInKm', this.distanceInKm)
  // this.dataService.setData('price', )

  this.router.navigate(['/products']);

  }


  // console.log("fromAddress ", this.fromAddress)
  // console.log("toAddress ", this.toAddress)

  // console.log("fromStreet ", this.fromStreet)
  // console.log("toStreet ", this.toStreet)
}

calculateTimeToDoneTrip(distance : number){

  return Math.round(distance / 10 * 60 )
}


}
