import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferService } from './offer.service';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule, MatTabsModule, MatProgressBarModule } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorrectOfferAddComponent } from './correct-offer-add/correct-offer-add.component';
import { ActivateOfferComponent } from './activate-offer/activate-offer.component';
import { FailureDialogComponent } from './failure-dialog/failure-dialog.component';


@NgModule({
  declarations: [OfferDetailsComponent, OfferAddComponent, EmailDialogComponent, CorrectOfferAddComponent, ActivateOfferComponent, FailureDialogComponent],
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatProgressBarModule,
    CommonModule,
    SlideshowModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [OfferService],
  entryComponents: [
    EmailDialogComponent,
    FailureDialogComponent
  ]
})
export class OfferModule { }
