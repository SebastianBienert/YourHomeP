import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { OfferService } from '../offer.service';
import { EmailMessage } from '../models/emailMessage';
import { FormControl, Validators } from '@angular/forms';

export interface EmailDialogData {
  offerId : string
}

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.css']
})
export class EmailDialogComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  message : string;
  ngOnInit(): void {
    
  }
  constructor(public dialogRef: MatDialogRef<OfferDetailsComponent>,
    private offerService : OfferService,
    @Inject(MAT_DIALOG_DATA) private data: EmailDialogData) {
      this.message = ""
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSendClick(): void{
    const message : EmailMessage = {
      emailSender : this.email.value,
      messageContent : this.message
    }

    this.offerService.sendEmail(this.data.offerId, message).subscribe(x =>{
      this.dialogRef.close();
    })
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
