import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIKey = environment.firebasApi 
  urlRegister: string = `${environment.urlRegister}${this.APIKey}`
  urlLogin: string = `${environment.urlLogin}${this.APIKey}`
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
