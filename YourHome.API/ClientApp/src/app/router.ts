import { HomeComponent } from "./home/home.component";
import { OfferDetailsComponent } from "./offer/offer-details/offer-details.component";
import { OffersListComponent } from "./offer/offers-list/offers-list.component";

export const router = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'offer/:offerId', component: OfferDetailsComponent },
    { path: 'offers', component: OffersListComponent }
  ]