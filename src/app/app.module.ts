import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './addemployee/addemployee.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ViewEmployeeComponent } from './viewemployee/viewemployee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    HomeComponent,
    NotfoundComponent,
    UpdateemployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : '' , component : HomeComponent},
      {path : 'add' ,component : AddEmployeeComponent},
      {path : 'view' , component : ViewEmployeeComponent},
      {path : 'update/:empID' , component : UpdateemployeeComponent},
      {path : '**' , component : NotfoundComponent}
    ],{ onSameUrlNavigation: 'reload' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
