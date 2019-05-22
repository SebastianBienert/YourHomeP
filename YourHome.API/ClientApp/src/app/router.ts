import { HomeComponent } from "./home/home.component";
import { OfferDetailsComponent } from "./offer/offer-details/offer-details.component";
import { OfferAddComponent } from "./offer/offer-add/offer-add.component";
import { CorrectOfferAddComponent } from "./offer/correct-offer-add/correct-offer-add.component";
import { ActivateOfferComponent } from './offer/activate-offer/activate-offer.component';

export const router = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'offer/:offerId', component: OfferDetailsComponent },
    { path: 'add', component: OfferAddComponent },
    { path: 'correctAdd/:offerId', component: CorrectOfferAddComponent },
    { path: 'activateOffer/:offerId', component: ActivateOfferComponent }
  ]
