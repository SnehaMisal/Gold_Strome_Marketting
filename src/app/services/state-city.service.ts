import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateCityService {

  constructor(private http: HttpClient) { }

  private apiurl = 'https://demo.codingbirdsonline.com/country-state-city-dropdown-api/index.php?endpoint=';
  public getCountries(): Observable<any> {
    return this.http.get<any>(this.apiurl + 'getcountry',{});
  }
  public getStates(countryId: number): Observable<any> {
    return this.http.get<any>(
      this.apiurl + 'getstate&country_id=' + countryId, {}
    );
  }
  public getCities(stateId: number): Observable<any> {
    return this.http.get<any>(this.apiurl + 'getcity&state_id=' + stateId, {});
  }
}
