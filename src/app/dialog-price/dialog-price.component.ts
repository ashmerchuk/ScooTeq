import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IncrementPriceComponent} from "../increment-price/increment-price.component";


@Component({
  selector: 'app-dialog-price',
  templateUrl: './dialog-price.component.html',
  styleUrls: ['./dialog-price.component.scss']
})

export class DialogPriceComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<IncrementPriceComponent>) {}

  closeDialog(){
    this.dialogRef.close();
  }


}
