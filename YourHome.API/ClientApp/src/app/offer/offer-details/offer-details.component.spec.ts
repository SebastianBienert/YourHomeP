import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDetailsComponent } from './offer-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule } from '@angular/material';
import { OfferService } from '../offer.service';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import {of} from 'rxjs';

describe('OfferDetailsComponent', () => {
  let component: OfferDetailsComponent;
  let fixture: ComponentFixture<OfferDetailsComponent>;

  class RouterMock {
    navigate(): void {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDetailsComponent ],
      providers: [
        OfferService,
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { paramMap: convertToParamMap( { 'offerId': '1' } ) } }
        },
        {
          provide: Router,
          useClass: RouterMock
        }
      ],
      imports: [ 
          HttpClientTestingModule,
          MatButtonModule,
          MatCheckboxModule,
          MatCardModule,
          MatMenuModule,
          MatIconModule,
          MatGridListModule,
          MatDividerModule,
          MatListModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
