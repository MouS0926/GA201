import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversestrComponent } from './reversestr.component';

describe('ReversestrComponent', () => {
  let component: ReversestrComponent;
  let fixture: ComponentFixture<ReversestrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReversestrComponent]
    });
    fixture = TestBed.createComponent(ReversestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
