import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { Router } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private dataService: DataService,private router: Router) { }

  chooseScooteSmall(){
    this.dataService.setData('priceProMinute', (0.21))
    this.dataService.setData('scooterType', 'smal')
    this.router.navigate(['/testing_drive']);

  }

  chooseScooteBike(){
    this.dataService.setData('priceProMinute', (0.31))
    this.dataService.setData('scooterType', 'bike')

    this.router.navigate(['/testing_drive']);

  }
}
