import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../models/offer';

@Component({
  selector: 'app-offers-list-element',
  templateUrl: './offers-list-element.component.html',
  styleUrls: ['./offers-list-element.component.css']
})
export class OffersListElementComponent implements OnInit {

  @Input('offer') offer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
