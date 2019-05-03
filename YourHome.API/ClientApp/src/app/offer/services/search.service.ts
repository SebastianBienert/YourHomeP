import { Injectable } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../models/offer';
import { SearchParameters } from '../models/search-parameters';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  foundOffers: Offer[] = [];

  constructor(private offerService: OfferService) { }

  setSearchParameters(searchParameters: SearchParameters) {

  }

}
