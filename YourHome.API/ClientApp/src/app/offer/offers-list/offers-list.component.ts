import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../models/offer';
import { SearchParameters } from '../models/search-parameters';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offers: Offer[] = [];

  constructor(private offerService: OfferService) {

   }

  ngOnInit() {
    this.offerService.search(new SearchParameters()).subscribe(o => this.offers = o)
  }

}
