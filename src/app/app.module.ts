import { NgModule, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotesService } from './services/notes.service';
import { AuthenticationService } from './services/authentication.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '../../node_modules/@angular/material/sidenav';
import { MatIcon, MatIconModule } from '../../node_modules/@angular/material/icon';
import { MatListModule } from '../../node_modules/@angular/material/list';
import { MatButtonModule } from '../../node_modules/@angular/material/button';
import { HoverEffectDirective } from './hover-effect.directive';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

const appRoutes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  }
]
@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    HoverEffectDirective
  ],
  imports: [ 
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    NotesService,
    AuthenticationService
  ],
  bootstrap: [AppComponent ]
})

export class AppModule implements OnInit{

  constructor(){}

  ngOnInit(){}
 }
