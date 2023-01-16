import { Component , OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {DialogPriceComponent} from "../dialog-price/dialog-price.component";

@Component({
  selector: 'app-increment-price',
  templateUrl: './increment-price.component.html',
  styleUrls: ['./increment-price.component.scss']
})
export class IncrementPriceComponent implements OnInit{
  constructor(private dialogRef : MatDialog){}
  isStart = false
  isStop = false
   timeoutId: any;
   isPause = false

  price = 0
  ngOnInit(){
    // this.incrementPrice()
  }
  changeStatusStart(){
    if(!this.isStart){
      this.isStart = true
      this.incrementPrice()

    }else{
      this.isStart = false
      this.isStop = true
      this.price.toFixed(2)
      clearTimeout(this.timeoutId)
      this.dialogRef.open(DialogPriceComponent)
    }
  }
  incrementPrice(){
    this.price += 0.15;
    // console.log("this.price ", this.price.toFixed(2))

    this.timeoutId = setTimeout(() => {
      this.incrementPrice()

    }, 1000);
    // setTimeout(this.incrementPrice,2000);
  return this.timeoutId
  }
  pausePrice(){
    if(!this.isPause){
      this.isPause = true
      console.log(" this.pausePriceVar T ",this.price)
      clearTimeout(this.timeoutId)
    }else{
      this.isPause = false
      this.incrementPrice()
    }

  }


}
