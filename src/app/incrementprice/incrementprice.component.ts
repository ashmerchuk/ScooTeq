import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementprice',
  templateUrl: './incrementprice.component.html',
  styleUrls: ['./incrementprice.component.scss']
})
export class IncrementpriceComponent implements OnInit {
  price = 0
  ngOnInit(){
    this.incrementPrice()
  }
  incrementPrice(){
    this.price += 0.15;
    setTimeout(() => {
      this.incrementPrice()

    }, 1000);
  }
}
