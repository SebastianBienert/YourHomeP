import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateOfferComponent } from './activate-offer.component';

describe('ActivateOfferComponent', () => {
  let component: ActivateOfferComponent;
  let fixture: ComponentFixture<ActivateOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
