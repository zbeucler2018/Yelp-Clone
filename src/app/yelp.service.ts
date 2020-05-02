import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { SearchResult } from './result/result.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
 This endpoint returns up to 1000 businesses based on the provided search criteria. It has some basic information about the business. To get detailed information and reviews, please use the Business ID returned here and refer to /businesses/{id} and /businesses/{id}/reviews endpoints.

Note: at this time, the API does not return businesses without any reviews.

Request
GET https://api.yelp.com/v3/businesses/search
*/

@Injectable()
export class YelpService {
  constructor(
    private http: HttpClient,
    @Inject('YELP_API_KEY') private apiKey: string,
    @Inject('YELP_API_URL') private apiUrl: string
  ) {}

  search(location: string, price: string, cat: string): Observable<SearchResult[]> {
    const params: string = [
      `price=${price}`, //manipulates the url to fit the parameters
      `location=${location}`, // ^^
      `categories=${cat}`, // ^^
      `limit=12`          // ^^
    ].join('&');
    const queryUrl = `${this.apiUrl}/search?${params}`;
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.apiKey}`);
    //headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(queryUrl, {headers}).map(response => {
      return <any>response['businesses'].map(business => {
        // console.log("raw item", item); // uncomment if you want to debug
        return new SearchResult({
          id: business.id,
          name: business.name,
          url: business.url,
          thumbnailUrl: business.image_url,
          price: business.price,
          rating: business.rating,
          location: business.location.city,
          distance: business.distance,
          state: business.location.state,
          
          phone: business.phone,         
          is_closed: business.is_closed, 
          address: business.location.address1 
        });
      });
    });
  }
}

