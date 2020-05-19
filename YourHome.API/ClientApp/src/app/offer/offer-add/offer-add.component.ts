import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';
import { Offer, EMPTY_NEW_OFFER, NewOffer } from '../models/offer';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailDialogComponent, EmailDialogData } from '../email-dialog/email-dialog.component';
import { MatDialog } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FailureDialogComponent } from '../failure-dialog/failure-dialog.component';
import {FileUploader} from "ng2-file-upload";
import { NewLocation } from '../models/location';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css'],
  providers: [OfferService]
})
export class OfferAddComponent implements OnInit {

  form: FormGroup;
  newOffer: NewOffer;
  loading: boolean;
  textRequiredValue: String = 'You must enter a value';

  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });


  constructor(private offerService: OfferService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder) {
    this.newOffer = EMPTY_NEW_OFFER;
    this.loading = false;
  }

  ngOnInit() {
    this.form = this.fb.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      title : new FormControl('', [Validators.required, Validators.maxLength(256)]),
      price : new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000000000)]),
      area : new FormControl('', [Validators.required, Validators.min(1), Validators.max(999999999999)]),
      city : new FormControl('', [Validators.required, Validators.maxLength(128)]),
      houseNumber : new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      apartmentNumber : new FormControl('', [Validators.required]),
      district : new FormControl('', [Validators.required]),
      voivodeship : new FormControl('', [Validators.required]),
      street : new FormControl('', [Validators.required]),
      photo : [null, null]
    })
  }

  save(): void {
    this.loading = true;

    const imageFiles: File[] = this.uploader.queue.map(fileItem => fileItem._file)

    const newOffer = {
      title: this.form.get('title').value,
      description: this.form.get('description').value,
      price: this.form.get('price').value,
      email: this.form.get('email').value,
      location: {
        city: this.form.get('city').value,
        district: this.form.get('district').value,
        voivodeship: this.form.get('voivodeship').value,
        street: this.form.get('street').value,
        houseNumber: this.form.get('houseNumber').value,
        apartmentNumber: this.form.get('apartmentNumber').value
      } as NewLocation,
      area: this.form.get('area').value
    } as NewOffer

    this.offerService.save(newOffer, imageFiles).subscribe(result => {
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

  getErrorMessageEmail() {
    return this.form.get('email').hasError('required') ? this.textRequiredValue :
      this.form.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageTitle() {
    return this.form.get('title').hasError('required') ? this.textRequiredValue :
      this.form.get('title').hasError('maxlength') ? 'Title is too long' :
        '';
  }

  getErrorMessagePrice() {
    return this.form.get('price').hasError('required') ? this.textRequiredValue :
      this.form.get('price').hasError('max') ? 'Price is too big' :
        this.form.get('price').hasError('min') ? 'Price must be more then 0' :
          '';
  }

  getErrorMessageArea() {
    return this.form.get('area').hasError('required') ? this.textRequiredValue :
      this.form.get('area').hasError('max') ? 'Area is too big' :
        this.form.get('area').hasError('min') ? 'Area must be more then 1' :
          '';
  }

  getErrorMessageCity() {
    return this.form.get('city').hasError('required') ? this.textRequiredValue : '';
  }

  getErrorMessageHouseNumber() {
    return this.form.get('houseNumber').hasError('required') ? this.textRequiredValue : '';
  }

  getErrorMessageApartmentNumber() {
    return this.form.get('apartmentNumber').hasError('required') ? this.textRequiredValue : '';
  }

  getErrorMessageDistrict() {
    return this.form.get('district').hasError('required') ? this.textRequiredValue : '';
  }

  getErrorMessageVoivodeship() {
    return this.form.get('voivodeship').hasError('required') ? this.textRequiredValue : '';
  }

  getErrorMessageStreet() {
    return this.form.get('street').hasError('required') ? this.textRequiredValue : '';
  }
}
