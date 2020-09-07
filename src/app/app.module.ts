import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SuccesspasswordpageComponent } from './successpasswordpage/successpasswordpage.component';
import { StepperformComponent } from './stepperform/stepperform.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatStepperModule } from "@angular/material/stepper";
import { StudenteditformComponent } from './studenteditform/studenteditform.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { StudentdetailscardComponent } from './studentdetailscard/studentdetailscard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentCardComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ChangepasswordComponent,
    SuccesspasswordpageComponent,
    StepperformComponent,
    StudenteditformComponent,
    BackbuttonComponent,
    StudentdetailscardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
