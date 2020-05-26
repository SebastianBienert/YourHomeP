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
  loading: boolean;

  constructor(private offerService: OfferService) {
    this.loading = false;
  }

  ngOnInit() {
    this.loading = true;
    this.offerService.search(new SearchParameters()).subscribe(o => {
      this.offers = o;
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }
  
  onSubmit() {
    this.loading = true;
    this.searchParameters.page = 1;
    this.offerService.search(this.searchParameters).subscribe(o => {
      this.offers = o;
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }

  onScroll() {
    this.loading = true;
    this.searchParameters.page++;
    this.offerService.search(this.searchParameters).subscribe(o => {
      this.offers.push(...o);
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }
}
