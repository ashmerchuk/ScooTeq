import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-increment-price',
  templateUrl: './increment-price.component.html',
  styleUrls: ['./increment-price.component.scss']
})
export class IncrementPriceComponent implements OnInit{
  isStart = false

  price = 0
  ngOnInit(){
    // this.incrementPrice()
  }



  pausePriceT(){
    
    

    console.log(" this.pausePriceVar T ",this.price)
  }



  changeStatusStart(){
    if(!this.isStart){
      this.isStart = true
      this.incrementPrice()

    }else{
      this.isStart = false
    }
  }
  incrementPrice(){
    this.price += 0.15;
    // console.log("this.price ", this.price.toFixed(2))

    setTimeout(() => {
      this.incrementPrice()

    }, 1000);
    // setTimeout(this.incrementPrice,2000);
  
  }
}