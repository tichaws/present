import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { ModalComponent } from './modal/modal.component';
import { GuardsService } from './authen-guard/authen-guard.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Variable } from './authen-guard/variable';


const appRoutes: Routes = [
  { path: '', component: LoginComponent,pathMatch: 'full'},
  { path: 'home', component: HomeComponent,canActivate: [GuardsService]},
  { path: 'error', component: ErrorComponent,pathMatch: 'full'},
  { path: "**", redirectTo: 'error' },

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DetailComponent,
    ErrorComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    // NgbModule,
  ],
  providers: [GuardsService,Variable],
  exports:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
