import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer, EMPTY_OFFER } from '../models/offer';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailDialogComponent, EmailDialogData } from '../email-dialog/email-dialog.component';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { FailureDialogComponent } from '../failure-dialog/failure-dialog.component';

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

  save(): void {
    this.loading = true;
    this.offerService.save(this.newOffer).subscribe(result => {
      this.loading = false;
      this.router.navigate(['correctAdd/' + result.id]);
    }, error => {
      this.loading = false;
      const dialogRef = this.dialog.open(FailureDialogComponent, {
        minHeight: '300px',
        minWidth: '550px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  title = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  price = new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000000000)]);
  area = new FormControl('', [Validators.required, Validators.min(1), Validators.max(999999999999)]);
  city = new FormControl('', [Validators.required, Validators.maxLength(128)]);
  houseNumber = new FormControl('', [Validators.required, Validators.maxLength(128)]);
  apartmentNumber = new FormControl('', [Validators.maxLength(128)]);
  district = new FormControl('', [Validators.maxLength(128)]);
  voivodeship = new FormControl('', [Validators.required, Validators.maxLength(128)]);

  textRequiredValue: String = 'You must enter a value';

  getErrorMessageEmail() {
    return this.email.hasError('required') ? this.textRequiredValue :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageTitle() {
    return this.title.hasError('required') ? this.textRequiredValue :
      this.title.hasError('maxlength') ? 'Title is too long' :
        '';
  }

  getErrorMessagePrice() {
    return this.price.hasError('required') ? this.textRequiredValue :
      this.price.hasError('max') ? 'Price is too big' :
        this.price.hasError('min') ? 'Price must be more then 0' :
          '';
  }

  getErrorMessageArea() {
    return this.area.hasError('required') ? this.textRequiredValue :
      this.area.hasError('max') ? 'Area is too big' :
        this.area.hasError('min') ? 'Area must be more then 1' :
          '';
  }

  getErrorMessageCity() {
    return this.city.hasError('required') ? this.textRequiredValue :
      this.city.hasError('maxlength') ? 'The name of the city is too long' :
        '';
  }

  getErrorMessageHouseNumber() {
    return this.houseNumber.hasError('required') ? this.textRequiredValue :
      this.houseNumber.hasError('maxlength') ? 'House number is too long' :
        '';
  }

  getErrorMessageApartmentNumber() {
    return this.apartmentNumber.hasError('maxlength') ? 'Apartment number is too long' :
      '';
  }

  getErrorMessageDistrict() {
    return this.district.hasError('maxlength') ? 'The name of the district is too long' :
      '';
  }

  getErrorMessageVoivodeship() {
    return this.voivodeship.hasError('required') ? this.textRequiredValue :
      this.voivodeship.hasError('maxlength') ? 'The name of the voivodeship is too long' :
        '';
  }
}
