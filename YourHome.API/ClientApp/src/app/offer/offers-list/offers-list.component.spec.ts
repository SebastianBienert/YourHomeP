import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListComponent } from './offers-list.component';
import { OfferService } from '../offer.service';
import { Observable, of } from 'rxjs';
import { Offer } from '../models/offer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { router } from 'src/app/router';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OffersListComponent', () => {
  let component: OffersListComponent;
  let fixture: ComponentFixture<OffersListComponent>;
  let offerServiceSpy: jasmine.SpyObj<OfferService>;
  let offerListComponent: OffersListComponent


  @Component({ selector: 'app-offers-list-element', template: '' })
  class OffersListElementComponent {
    @Input('offer') offer: Offer;
  }


  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('OfferService', ['search']);

    TestBed.configureTestingModule({
      declarations: [OffersListComponent, OffersListElementComponent],
      imports: [
        MatMenuModule,
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
        RouterModule,
        BrowserAnimationsModule
      ],
      providers: [
        OffersListComponent,
        { provide: OfferService, useValue: spy }
      ]
    })
      .compileComponents();

    let offersListElementComponent = TestBed.createComponent(OffersListElementComponent).componentInstance;
    offersListElementComponent.offer = new Offer();

    offerListComponent = TestBed.get(OffersListComponent);
    offerServiceSpy = TestBed.get(OfferService)
    offerServiceSpy.search.and.returnValue(of([]));

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
