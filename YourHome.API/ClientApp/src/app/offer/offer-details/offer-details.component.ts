import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer } from '../models/offer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
  providers: [OfferService]
})
export class OfferDetailsComponent implements OnInit {

  constructor(private offerService: OfferService,
    private route: ActivatedRoute) { }

  offer: Offer;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('offerId');
    this.offerService.get(id).subscribe(o => {
      this.offer = o
    });
  }

}
