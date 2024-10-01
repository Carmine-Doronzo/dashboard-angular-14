import { Component,OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard-angular-14';
  showHeaderFooter = true;
  constructor(private router:Router,private authService:AuthService){}

  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Controlla la rotta corrente e imposta showHeaderFooter di conseguenza
        this.showHeaderFooter = !['/dashboard','/dashboard/pagina1','/dashboard/pagina2'].includes(this.router.url);
      }
    });
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user')!)
      this.authService.createUser(user.email, user.id, user._token, user._expirationDate)
    }
  }

}
