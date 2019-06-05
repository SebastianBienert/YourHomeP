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

        //let formData = this.toFormData(newOffer);
        let formData = new FormData();
        if(images && images.length)
            images.forEach(file => formData.append(file.name, file));
        
        // console.log(fileItem.name);
        // data.append('file', fileItem);
        // data.append('fileSeq', 'seq'+j);
        // data.append( 'dataType', this.uploadForm.controls.type.value);
        // this.uploadFile(data).subscribe(data => alert(data.message));
        const req = new HttpRequest('POST', 'api/Offer/', formData, {
        reportProgress: true,
        responseType: 'text'
      });

      return this.httpClient.request(req);
      newOffer.creationDate = new Date();
      return this.httpClient.post<Offer>('api/Offer/', formData);
    }

    sendEmail(offerId: string, message : EmailMessage): Observable<any> {
        return this.httpClient.post(`api/offer/${offerId}/message`, message);
    }

    private toFormData<T>(formValue: T) {
        const formData = new FormData();
        for (const key of Object.keys(formValue)) {
            const value = formValue[key];
            formData.append(key, value);
        }
        return formData;
    }

}


