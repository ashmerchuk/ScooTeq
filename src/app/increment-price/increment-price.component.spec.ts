import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementPriceComponent } from './increment-price.component';

describe('IncrementPriceComponent', () => {
  let component: IncrementPriceComponent;
  let fixture: ComponentFixture<IncrementPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
