import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-activate-offer',
  templateUrl: './activate-offer.component.html',
  styleUrls: ['./activate-offer.component.css'],
  providers: [OfferService]
})
export class ActivateOfferComponent implements OnInit {
  offerId: string;

  constructor(private offerService: OfferService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('offerId');
    this.offerService.activate(this.offerId).subscribe();
  }

}
