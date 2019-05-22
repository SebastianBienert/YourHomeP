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
    inputOffer.images = ["img", "img2"]
    inputOffer.title = "title";
    inputOffer.price = 10;
    inputOffer.description = "description";
    
    component.offer = inputOffer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display offer title', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const a = bannerElement.querySelector('mat-card-title a');
    expect(a.textContent).toEqual('title');
  });

  it('should display offer description', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('mat-card-content p');
    expect(p.textContent).toEqual('description');
  });

  it('should display offer price', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const div = bannerElement.querySelector('mat-card-actions div');
    expect(div.textContent).toEqual('10 zł');
  });

  it('should display first offer image', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const img = bannerElement.querySelector('img');
    expect(img.getAttribute('src')).toEqual('img');
  });
});
