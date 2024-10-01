import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  peopleToMod : any
  url: string = 'https://angular-course-4b8ea-default-rtdb.europe-west1.firebasedatabase.app/people'
  constructor(private http:HttpClient, private authService: AuthService) { }

  insertPersona(url:string,body:object){
    return this.http.post(`${this.url}${url}?auth=${this.authService.user!.token}`,body)
  }

  getPeople(url:string){
    
    return this.http.get(`${this.url}${url}?auth=${this.authService.user!.token}`)
  }

  deletePerson(id:string){
    //console.log(`${this.url}/${id}.json`)
    return this.http.delete(`${this.url}/${id}.json?auth=${this.authService.user!.token}`)
  }

  patchPerson(id:string,body:object){
    return this.http.patch(`${this.url}/${id}.json?auth=${this.authService.user!.token}`,body)
  }

}
