import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAddComponent } from './offer-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule } from '@angular/material';
import { OfferService } from '../offer.service';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';
import {of} from 'rxjs';

describe('OfferAddComponent', () => {
  let component: OfferAddComponent;
  let fixture: ComponentFixture<OfferAddComponent>;

  class RouterMock {
    navigate(): void {
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferAddComponent ],
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
          MatIconModule,
          MatCardModule,
          MatMenuModule,
          MatIconModule,
          MatGridListModule,
          MatDividerModule,
          MatListModule,
          MatDialogModule,
          SlideshowModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
