import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Offer, NewOffer } from "./models/offer";
import { SearchParameters } from "./models/search-parameters";
import { EmailMessage } from "./models/emailMessage";

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
        if(searchParameters.minArea){
            params = params.append('minArea', searchParameters.minArea.toString());
        }
        if(searchParameters.maxArea){
            params = params.append('maxArea', searchParameters.maxArea.toString());
        }
        if(searchParameters.maxArea){
            params = params.append('minRoomCount', searchParameters.minRoomCount.toString());
        }
        if(searchParameters.maxArea){
            params = params.append('maxRoomCount', searchParameters.maxRoomCount.toString());
        }
        if(searchParameters.market){
            params = params.append('market', searchParameters.market.toString());
        }
        if(searchParameters.offerType){
            params = params.append('offerType', searchParameters.offerType.toString());
         }
        params = params.append('page', searchParameters.page.toString());
        return this.httpClient.get<Offer[]>(`api/offer/search`, { params: params });
    }
    
    activate(id: string): Observable<boolean> {
      return this.httpClient.get<boolean>(`api/offer/activate/${id}`);
    }

    save(newOffer: NewOffer, images: File[]): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded'
        })
      };

        let formData = this.toFormData(newOffer);
        if(images && images.length)
            images.forEach(file => formData.append('files', file));

        return this.httpClient.post<Offer>('api/Offer/', formData);
    }

    sendEmail(offerId: string, message : EmailMessage): Observable<any> {
        return this.httpClient.post(`api/offer/${offerId}/message`, message);
    }

    private toFormData<T>(formValue: T) {
        const formData = new FormData();
        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            if(typeof value === 'object' && value !== null){
                for(const innerKey of Object.keys(value)){
                    const innerValue = value[innerKey];
                    formData.append(innerKey, innerValue);
                }
            }
            else
                formData.append(key, value);
        }
        return formData;
    }

}


