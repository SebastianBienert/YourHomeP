import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CorrectOfferAddComponent } from './correct-offer-add.component';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { OfferService } from '../offer.service';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule, MatMenuModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule, MatFormField, MatFormFieldModule, MatInputModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('CorrectOfferAddComponent', () => {
  let component: CorrectOfferAddComponent;
  let fixture: ComponentFixture<CorrectOfferAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CorrectOfferAddComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectOfferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
