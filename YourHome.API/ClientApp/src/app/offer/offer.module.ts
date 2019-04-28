import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferService } from './offer.service';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  exports: [OfferDetailsComponent],
  declarations: [OfferDetailsComponent],
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
    SlideshowModule
  ],
  providers: [OfferService]
})
export class OfferModule { }
