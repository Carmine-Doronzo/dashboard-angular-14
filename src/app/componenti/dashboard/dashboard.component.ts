import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private firebaseDB: FirebaseService, private authService : AuthService) { }

  ngOnInit(): void {
    
    
  }
  onLogout(){
    this.authService.logout()
  }
  
}

