import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly USER_KEY = 'user';

  constructor() { }

  saveUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }

  removeUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }

}
