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
  searchParameters: SearchParameters = new SearchParameters();
  throttle = 600;
  scrollDistance = 2;
  scrollUpDistance = 2;

  constructor(private offerService: OfferService) {

  }

  ngOnInit() {
    this.offerService.search(new SearchParameters()).subscribe(o => this.offers = o)
  }
  
  onSubmit() {
    this.searchParameters.page = 1;
    this.offerService.search(this.searchParameters).subscribe(o => this.offers = o)
  }

  onScroll() {
    this.searchParameters.page++;
    this.offerService.search(this.searchParameters).subscribe(o => this.offers.push(...o))
  }
}
