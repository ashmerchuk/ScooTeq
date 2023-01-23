
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {FormControl, FormGroup} from '@angular/forms';

import {ZIPCODES} from '../data/zipcodes'

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

interface Country {
  name : string;
  code: string;
}

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit  {



  // myControl = new FormControl('');



// addresses : Address[] = zipcodes

// // options: this.addresses;


// //   // options: string[] = ['One', 'Two', 'Three'];
//   filteredOptions: Observable<string[]> | undefined;

//   ngOnInit() {
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//       startWith(''),
//       map(value => this._filter(value || '')),
//     );
//   }

//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     // option.zipcode => option.zipcode.toLowerCase().includes(filterValue)
//     return this.addresses.filter(ad => {
//     ad.zipcode.toLowerCase().includes(filterValue)
//     });
//   },





myControl = new FormControl();


options = ZIPCODES
// options = [{
//     displayOrderId: 1,
//     code: "1111",
//     description: "1111 Description"
//   },
//   {
//     displayOrderId: 2,
//     code: "2222",
//     description: "2222 Description"
//   },
//   {
//     displayOrderId: 3,
//     code: "3333",
//     description: "3333 Description"
//   },
//   {
//     displayOrderId: 4,
//     code: "4444",
//     description: "4444 Description"
//   }
// ];
filteredOptions: Observable<any> | undefined ;

ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(""),
    map(value => this._filter(value))
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
    option => option.zipcode.toLowerCase().indexOf(filterValue) === 0
  );
}

displayFn(value: any) {
  return value ? value.zipcode : undefined;
}


selectOption(e: MatAutocompleteSelectedEvent) {
  const item = e.option.value;
  console.log(item);
}



}
