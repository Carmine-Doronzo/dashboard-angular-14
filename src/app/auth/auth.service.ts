import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlRegister: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAILaKh_XJPRJZbp2uvwsPgbYGJnNJPvI'
  urlLogin: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAILaKh_XJPRJZbp2uvwsPgbYGJnNJPvI'
  isLogged = false
  user: User | null

  constructor(private http: HttpClient, private router: Router) { }

  register(body: {}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post(this.urlRegister, body, { headers });
  }

  login(body: {}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post(this.urlLogin, body, { headers })
      
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate)
    this.isLogged = true
  }

  logout() {
    this.isLogged = false
    this.user = null
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }
}
