import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Offer } from "./models/offer";

@Injectable()
export class OfferService {

    constructor(private httpClient: HttpClient) {
    }

    get(id: string): Observable<Offer> {
        return this.httpClient.get<Offer>(`api/offer/${id}`);
    }
}


