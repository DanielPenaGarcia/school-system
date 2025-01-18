import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly countryApi = 'https://restcountries.com/v3.1';

  constructor(private readonly http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countryApi}/all?fields=name,flags`);
  }

  getCountryInfoByName(name: string): Observable<Country> {
    return this.http.get<Country>(`${this.countryApi}/name/${name}`);
  }
}
