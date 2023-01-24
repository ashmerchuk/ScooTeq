import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateElectricityComponent } from './calculate-electricity.component';

describe('CalculateElectricityComponent', () => {
  let component: CalculateElectricityComponent;
  let fixture: ComponentFixture<CalculateElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateElectricityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
