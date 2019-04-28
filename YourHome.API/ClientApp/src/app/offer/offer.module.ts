import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [OfferDetailsComponent],
  imports: [
    CommonModule,
    SlideshowModule
  ]
})
export class OfferModule { }
