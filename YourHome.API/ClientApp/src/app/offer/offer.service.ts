import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Offer } from "./models/offer";
import { SearchParameters } from "./models/search-parameters";

@Injectable()
export class OfferService {

    constructor(private httpClient: HttpClient) {
    }

    get(id: string): Observable<Offer> {
        return this.httpClient.get<Offer>(`api/offer/${id}`);
    }

    search(searchParameters: SearchParameters): Observable<Offer[]> {
        let params = new HttpParams();

        params = params.append('searchPhrase', searchParameters.searchPhrase);
        if(searchParameters.minPrice){
            params = params.append('minPrice', searchParameters.minPrice.toString());
        }
        if(searchParameters.maxPrice){
            params = params.append('maxPrice', searchParameters.maxPrice.toString());
        }
        params = params.append('page', searchParameters.page.toString());

        return this.httpClient.get<Offer[]>(`api/offer/search`, { params: params });
    }
}


