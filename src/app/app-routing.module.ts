import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PdescriptComponent } from './pdescript/pdescript.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { NewpComponent } from './newp/newp.component';
import { EpostComponent } from './epost/epost.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'postdescription', component: PdescriptComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search' , component: SearchComponent },
  { path: 'newpost' , component: NewpComponent },
  { path: 'editpost' , component: EpostComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
