import { StudentdetailscardComponent } from './studentdetailscard/studentdetailscard.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCardComponent } from './student-card/student-card.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccesspasswordpageComponent } from './successpasswordpage/successpasswordpage.component';
import { StepperformComponent } from './stepperform/stepperform.component'

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/studentlist', 
    pathMatch: 'full' 
  },
  {
    path: 'studentlist',
    component: StudentDetailsComponent
  },
  {
    path: 'studentdetails',
    component: StudentCardComponent
  },
  {
    path : 'studentdetailscard',
    component: StudentdetailscardComponent
  },
  {
    path: 'successpassword',
    component: SuccesspasswordpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'signup',
  //   component: ModalComponent,
  //   data : {some_data : 'false'}
  // },
  {
    path: 'stepperform',
    component: StepperformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
