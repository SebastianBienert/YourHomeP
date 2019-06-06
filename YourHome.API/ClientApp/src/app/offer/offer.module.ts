import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferService } from './offer.service';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule, MatTabsModule, MatProgressBarModule } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { OffersListComponent } from './offers-list/offers-list.component';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OffersListElementComponent } from './offers-list-element/offers-list-element.component';
import { RouterModule } from '@angular/router';
import { router } from '../router';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { CorrectOfferAddComponent } from './correct-offer-add/correct-offer-add.component';
import { ActivateOfferComponent } from './activate-offer/activate-offer.component';
import { FailureDialogComponent } from './failure-dialog/failure-dialog.component';
import { FileSelectDirective, FileDropDirective, FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    OfferDetailsComponent,
    OfferAddComponent,
    EmailDialogComponent,
    CorrectOfferAddComponent,
    ActivateOfferComponent,
    FailureDialogComponent,
    MapComponent,
    OffersListComponent,
    // FileSelectDirective,
    // FileDropDirective,
    OffersListElementComponent],
  imports: [
    FileUploadModule,
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
    ReactiveFormsModule,
    InfiniteScrollModule,
    RouterModule.forRoot(router),
    ContentLoaderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfHYANteBHqCaytRIED3tJ2SzthNoByyY'
    })
  ],
  providers: [OfferService],
  entryComponents: [
    EmailDialogComponent,
    FailureDialogComponent
  ]
})
export class OfferModule { }
