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
import { ClaculateElectricityComponent } from './claculate-electricity/claculate-electricity.component';
import { TripComponent } from './trip/trip.component';
import { ProductsComponent } from './products/products.component'



import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


import { NgSelectModule } from '@ng-select/ng-select';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { MatInputModule } from '@angular/material/input';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';





@NgModule({
  declarations: [
    AppComponent,
    IncrementPriceComponent,
    DialogPriceComponent,
    ClaculateElectricityComponent,
    TripComponent,
    ProductsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
