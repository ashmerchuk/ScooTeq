import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesConsumeCalculatorComponent } from './devices-consume-calculator.component';

describe('DevicesConsumeCalculatorComponent', () => {
  let component: DevicesConsumeCalculatorComponent;
  let fixture: ComponentFixture<DevicesConsumeCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesConsumeCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicesConsumeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
