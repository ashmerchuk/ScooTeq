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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
