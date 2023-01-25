import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DeviceItem } from '../model/calculator.model';

@Component({
  selector: 'app-device-item-formular',
  templateUrl: './device-item-formular.component.html',
  styleUrls: ['./device-item-formular.component.scss']
})
export class DeviceItemFormularComponent implements OnInit, OnDestroy{
  private formSubscription!: Subscription;
  private newId!: number;
  public deviceItemForm!: UntypedFormGroup
  public mode!: 'add' | 'edit';

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _dialogRef: MatDialogRef<DeviceItemFormularComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeviceItem | null,
  ) {}

  ngOnInit() {
    this.handleData();
    this.initFormular(this.data);
  }

  private handleData() {
    if(this.data) this.mode = 'edit';
    else {
      this.mode = 'add';
      this.newId = this.generateRandomId();
    }
  }

  private generateRandomId():number {
    return Math.floor(new Date().getTime() * Math.random());
  }

  private initFormular(item: DeviceItem | null = null) {
    this.deviceItemForm = this._formBuilder.group({
      name: [item ? item.name : null, [Validators.required]],
      amount: [item ? item.amount : null, [Validators.required]],
      consume:[item ? item.consume : null, [Validators.required]], 
    })
    this.formSubscription = this.deviceItemForm.valueChanges
      .subscribe(value => {
        this.data = {...this.data, ...value};
        if(this.newId && this.data) this.data.id = this.newId;
      });
  }

  public onNoClick():void {
    this._dialogRef.close();
  }

  ngOnDestroy(): void {
      this.formSubscription.unsubscribe();
  }
}
