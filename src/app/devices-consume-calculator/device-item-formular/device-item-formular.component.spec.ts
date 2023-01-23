import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceItemFormularComponent } from './device-item-formular.component';

describe('DeviceItemFormularComponent', () => {
  let component: DeviceItemFormularComponent;
  let fixture: ComponentFixture<DeviceItemFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceItemFormularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceItemFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
