import { HomeComponent } from "./home/home.component";
import { OfferDetailsComponent } from "./offer/offer-details/offer-details.component";
import { OfferAddComponent } from "./offer/offer-add/offer-add.component";

export const router = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'offer/:offerId', component: OfferDetailsComponent },
    { path: 'add', component: OfferAddComponent }
  ]
