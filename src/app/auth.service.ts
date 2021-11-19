import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;
  private userName: string;
  private passWord: string;

  constructor() {
    this.isloggedIn = false;
  }

  login(username: string, password: string) {
    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    this.userName = username;
    this.passWord = password;
    if (this.userName === 'admin' && this.passWord === 'admin') {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName === 'admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }

}