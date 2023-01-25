import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { IncrementPriceComponent } from './increment-price/increment-price.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogPriceComponent} from './dialog-price/dialog-price.component';
import { AppRoutingModule } from './app-routing.module';
import { TripComponent } from './trip/trip.component';
import { ProductsComponent } from './products/products.component'

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { NgSelectModule } from '@ng-select/ng-select';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatInputModule } from '@angular/material/input';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DevicesConsumeCalculatorComponent } from './devices-consume-calculator/devices-consume-calculator.component';
import {MatCardModule} from '@angular/material/card';
import { DeviceItemComponent } from './devices-consume-calculator/device-item/device-item.component';
import { DeviceItemFormularComponent } from './devices-consume-calculator/device-item-formular/device-item-formular.component';
import { CalculatorResultComponent } from './devices-consume-calculator/calculator-result/calculator-result.component';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    IncrementPriceComponent,
    DialogPriceComponent,
    TripComponent,
    ProductsComponent,
    DevicesConsumeCalculatorComponent,
    DeviceItemComponent,
    DeviceItemFormularComponent,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgSelectModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
