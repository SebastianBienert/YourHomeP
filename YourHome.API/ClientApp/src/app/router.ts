import { HomeComponent } from "./home/home.component";
import { OfferDetailsComponent } from "./offer/offer-details/offer-details.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";

export const router = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'offer/:offerId', component: OfferDetailsComponent },
    { path: 'fetch-data', component: FetchDataComponent },
  ]