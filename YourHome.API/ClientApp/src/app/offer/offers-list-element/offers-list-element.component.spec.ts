import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListElementComponent } from './offers-list-element.component';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';
import { router } from 'src/app/router';
import { Offer } from '../models/offer';

describe('OffersListElementComponent', () => {
  let component: OffersListElementComponent;
  let fixture: ComponentFixture<OffersListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersListElementComponent ],
      imports: [MatMenuModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        CommonModule,
        SlideshowModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListElementComponent);
    component = fixture.componentInstance;
    
    let inputOffer = new Offer();
    inputOffer.images = ["img"]
    
    component.offer = inputOffer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
