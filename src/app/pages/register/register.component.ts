import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "password" : new FormControl(null,[Validators.required,Validators.minLength(8)])
    })

    

  }
  
  onSubmit():void {
    console.log(this.registerForm)
    let email:string = this.registerForm.value.email
    let password:string = this.registerForm.value.password
    this.authService.register({email:email, password:password, returnSecureToken : true}).subscribe(data  =>{
      this.router.navigate(['/login'])
    })
  }

}
