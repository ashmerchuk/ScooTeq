import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaculateElectricityComponent } from './claculate-electricity.component';

describe('ClaculateElectricityComponent', () => {
  let component: ClaculateElectricityComponent;
  let fixture: ComponentFixture<ClaculateElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaculateElectricityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaculateElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
