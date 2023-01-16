import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementpriceComponent } from './incrementprice.component';

describe('IncrementpriceComponent', () => {
  let component: IncrementpriceComponent;
  let fixture: ComponentFixture<IncrementpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
