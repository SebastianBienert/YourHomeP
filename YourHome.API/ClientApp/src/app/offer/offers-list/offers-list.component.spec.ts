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
import { SearchParameters } from '../models/search-parameters';

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

  // it('onSubmit should perform initial search', () => {
  //   // Arrange
  //   offerServiceSpy.search.and.returnValue(of([]));
  //   offerListComponent.searchParameters = {
  //     page: 1,
  //     minPrice: 0,
  //     maxPrice: 15,
  //     searchPhrase: "phrase"
  //   }

  //   // Act
  //   offerListComponent.onSubmit();

  //   // Assert
  //   expect(offerServiceSpy.search).toHaveBeenCalledWith(offerListComponent.searchParameters);
  // });

  // it('onScroll should perform search with incremented page', () => {
  //   // Arrange
  //   const expectedSearchParameters: SearchParameters = {
  //     page: 2,
  //     minPrice: 0,
  //     maxPrice: 15,
  //     searchPhrase: "phrase"
  //   }

  //   offerServiceSpy.search.and.returnValue(of([]));
  //   offerListComponent.searchParameters = {
  //     page: 1,
  //     minPrice: 0,
  //     maxPrice: 15,
  //     searchPhrase: "phrase"
  //   }

  //   // Act
  //   offerListComponent.onScroll();

  //   // Assert
  //   expect(offerServiceSpy.search).toHaveBeenCalledWith(offerListComponent.searchParameters);
  //   expect(offerListComponent.searchParameters).toEqual(expectedSearchParameters);
  // });
});
