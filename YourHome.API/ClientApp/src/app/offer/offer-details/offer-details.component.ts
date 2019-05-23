import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer, EMPTY_OFFER } from '../models/offer';
import { ActivatedRoute } from '@angular/router';
import { EmailDialogComponent, EmailDialogData } from '../email-dialog/email-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
  providers: [OfferService]
})
export class OfferDetailsComponent implements OnInit {

  constructor(private offerService: OfferService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
      this.offer = EMPTY_OFFER;
     }

  offer: Offer;
  loading: boolean;
  isActive: boolean;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('offerId');
    this.loading = true;
    this.offerService.get(id).subscribe(o => {
      this.isActive = o.state > 0;
      this.offer = o;
      this.loading = false;
    });
  }

  openEmailDialog() {
    if (this.isActive) {
      const dialogRef = this.dialog.open(EmailDialogComponent, {
        minHeight: '300px',
        minWidth: '550px',
        data: {
          offerId: this.offer.id,
        } as EmailDialogData
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
