import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferService } from './offer.service';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule } from '@angular/material';

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
    CommonModule
  ],
  providers: [OfferService]
})
export class OfferModule { }
