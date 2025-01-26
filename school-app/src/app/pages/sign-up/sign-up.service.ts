import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from './sign-up.types';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private readonly http: HttpClient) { }

  saveSchool(signUp: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>(`${environment.apiUrl}/schools`, signUp);
  }
}
