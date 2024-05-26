import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/HomeComponent';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatabaseComponent } from './database/database.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AuthComponent } from './auth/auth.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigComponent } from './navig/navig.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormulComponent } from './formul/formul.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PdescriptComponent } from './pdescript/pdescript.component';
import { NewpComponent } from './newp/newp.component';
import { EpostComponent } from './epost/epost.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    DashboardComponent,
    CommentsComponent,
    DatabaseComponent,
    AuthComponent,
    NavigComponent,
    FormulComponent,
    DragComponent,
    MenuComponent,
    SearchComponent,
    AcceuilComponent,
    PdescriptComponent,
    NewpComponent,
    EpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [
    // HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
