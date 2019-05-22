import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Offer } from "./models/offer";
import { EmailMessage } from "./models/emailMessage";

@Injectable()
export class OfferService {
  

    constructor(private httpClient: HttpClient) {
    }

    get(id: string): Observable<Offer> {
        return this.httpClient.get<Offer>(`api/offer/${id}`);
    }

    activate(id: string): Observable<boolean> {
      return this.httpClient.get<boolean>(`api/offer/activate/${id}`);
    }

    save(newOffer: Offer): Observable<Offer> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      newOffer.creationDate = new Date();
      return this.httpClient.post<Offer>('api/Offer/', newOffer, httpOptions);
    }

    sendEmail(offerId: string, message : EmailMessage): Observable<any> {
        return this.httpClient.post(`api/offer/${offerId}/message`, message);
    }
}


