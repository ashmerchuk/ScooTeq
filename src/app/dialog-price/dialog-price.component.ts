import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-dialog-price',
  templateUrl: './dialog-price.component.html',
  styleUrls: ['./dialog-price.component.scss']
})
export class DialogPriceComponent implements OnInit{
  // constructor(@Inject (MAT_DIALOG_DATA) public data) {}
  ngOnInit() : void {}
}
