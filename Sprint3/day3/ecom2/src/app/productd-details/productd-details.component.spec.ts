import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdDetailsComponent } from './productd-details.component';

describe('ProductdDetailsComponent', () => {
  let component: ProductdDetailsComponent;
  let fixture: ComponentFixture<ProductdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
