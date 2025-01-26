import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Session } from '@core/interfaces/session.interface';
import { User } from '@core/interfaces/user.interface';
import { environment } from '@env/environment';
import { Observable, tap } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: EventEmitter<Session> = new EventEmitter();

  constructor(private readonly http: HttpClient, private readonly storage: StorageService) { }

  signInWithEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/sign-in`, { email, password }).pipe(
      tap((user: User) => {
        this.auth.emit({ action: 'login', user });
      }),
    );
  }

  isLogged(): boolean {
    return !!this.storage.getUser();
  }

  signOut(): void {
    this.http.post<User>(`${environment.apiUrl}/auth/sign-out`, {}).pipe(
      tap(() => {
        this.auth.emit({ action: 'logout' });
      })
    );
  }
}
