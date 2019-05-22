import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { OfferService } from '../offer.service';
import { EmailMessage } from '../models/emailMessage';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-correct-offer-add',
  templateUrl: './correct-offer-add.component.html',
  styleUrls: ['./correct-offer-add.component.css']
})
export class CorrectOfferAddComponent implements OnInit {
  offerPath: string;

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.offerPath = "http://localhost:58118/offer/" + this.route.snapshot.paramMap.get('offerId');
  }

  
}
