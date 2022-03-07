import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateconfirmationComponent } from './donateconfirmation.component';

describe('DonateconfirmationComponent', () => {
  let component: DonateconfirmationComponent;
  let fixture: ComponentFixture<DonateconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
