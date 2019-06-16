import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EmailDialogComponent } from './email-dialog.component';
import { OfferDetailsComponent } from '../offer-details/offer-details.component';
import { OfferService } from '../offer.service';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule, MatMenuModule, MatGridListModule, MatDividerModule, MatListModule, MatDialogModule, MatFormField, MatFormFieldModule, MatInputModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { Offer } from '../models/offer';

describe('EmailDialogComponent', () => {
  let component: EmailDialogComponent;
  let fixture: ComponentFixture<EmailDialogComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDialogComponent ],
      providers: [
        OfferService,
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { paramMap: convertToParamMap( { 'offerId': '1' } ) } }
        },
        {
          provide: MatDialogRef,
          useValue: {
            close: (dialogResult: any) => { }
          }
        },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      imports: [ 
          HttpClientTestingModule,
          MatButtonModule,
          MatIconModule,
          FormsModule,
          MatIconModule,
          MatInputModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatDialogModule],
          schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return errors if email input is not valid', () => {
    component.email.setValue('123abc');
    expect(component.getErrorMessage()).toBe("Not a valid email");
  });

  it('should return errors if email input is empty', () => {
    component.email.setValue('');
    expect(component.getErrorMessage()).toBe("You must enter a value");
  });

  it('should not return errors if email input contains valid email', () => {
    component.email.setValue('testemail@gmail.com');
    expect(component.getErrorMessage()).toBe("");
  });

  it('should disable send button if email is not valid', fakeAsync(() => {
    component.email.setValue('123abc');
    expect(component.email.valid).toBeFalsy();
  }));

  it('should enable send button if email is valid', fakeAsync(() => {
      component.email.setValue('testemail@gmail.com');
      expect(component.email.valid).toBeTruthy();
  }));

});
