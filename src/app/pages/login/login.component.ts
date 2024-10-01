import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup
  
  constructor(private authService : AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password" : new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }
  
  onSubmit(){
    console.log(this.loginForm)
    let email:string = this.loginForm.value.email
    let password:string = this.loginForm.value.password
    this.authService.login({email:email, password:password, returnSecureToken : true}).subscribe((data:any)  =>{
      //console.log(data)
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authService.createUser(data.email,data.localId,data.idToken,expirationDate)
      //console.log(this.authService.user)
      localStorage.setItem('user',JSON.stringify(this.authService.user))
      if(this.authService.user){
        this.router.navigate(['/dashboard/pagina1'])
      }
    })
  }
}
