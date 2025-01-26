import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private readonly http: HttpClient) { }

  signIn(email: string, password: string): Observable<object> {
    return this.http.post(`${environment.apiUrl}/users/sign-in`, { email, password });
  }
}
