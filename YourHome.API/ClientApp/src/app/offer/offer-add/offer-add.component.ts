import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer, EMPTY_OFFER } from '../models/offer';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailDialogComponent, EmailDialogData } from '../email-dialog/email-dialog.component';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css'],
  providers: [OfferService]
})
export class OfferAddComponent implements OnInit {
  constructor(private offerService: OfferService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) {
    this.newOffer = EMPTY_OFFER;
    this.loading = false;
  }

  newOffer: Offer;
  loading: boolean;

  ngOnInit() {
  }

  openEmailDialog(){
    const dialogRef = this.dialog.open(EmailDialogComponent, {
      minHeight: '300px',
      minWidth : '550px',
      data:{
        offerId: this.newOffer.id,
      } as EmailDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  title = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required, Validators.min(0)]);
  area = new FormControl('', [Validators.required, Validators.min(1)]);
  city = new FormControl('', [Validators.required]);
  houseNumber = new FormControl('', [Validators.required, Validators.min(0)]);
  apartmentNumber = new FormControl('', [Validators.min(0)]);
  voivodeship = new FormControl('', [Validators.required]); 
  
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
      '';
  }

  getErrorMessage() {
    return 'You must enter a value or value is incorrect';
  }

  save(): void {
    this.loading = true;
    this.offerService.save(this.newOffer).subscribe(result => {
      this.loading = false;
      this.router.navigate(['correctAdd/' + result.id]);
    }, error => { this.loading = false;});
  }
}
