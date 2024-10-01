import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

import { AuthGuard } from './auth/auth.guard';
import * as path from 'path';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:'pagina1', component:Pagina1Component},
    {path:'pagina2', component:Pagina2Component},
   
  ]
  },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
