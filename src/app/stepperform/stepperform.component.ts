import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common'
import { FormGroupDirective } from '@angular/forms';
import { StudenteditformComponent } from '../studenteditform/studenteditform.component'
import { Router } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import { StudentCardComponent } from '../student-card/student-card.component';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepperform',
  templateUrl: './stepperform.component.html',
  styleUrls: ['./stepperform.component.scss']
})
export class StepperformComponent implements OnInit {
  
  @ViewChild(StudenteditformComponent) studentDetails : StudenteditformComponent;

  labelstepperList = ['Student Details','Verify','Summary'];
  studentId : number;
  StudentdetailsId: any;
  id: number;
  student: Object;
  studentValue : boolean = false;
  option : boolean = true;
  optionBack : boolean = true;
  stepper: MatStepper;
  hiddenEditIcon: boolean = false;
  studentdetails: any;
  studentdata: Object;
  enable: boolean = false;

  ButtonWithEnable(buttonEnable: boolean){
    this.enable = buttonEnable;
  }

  constructor(private location: Location,private router: Router,private Userservice: StudentdataService) { 
    // this.Userservice.getStudentData().subscribe(
    // (res) => {
    //   console.log(res);
    //   this.student = res;
    // }
  // );
}

  ngOnInit(): void {
    this.Userservice.getStudentDetails()
        .subscribe(studentid => this.studentId = studentid);
  }

  goBack(op,step : MatStepper): void {
    if (op == true){
    this.location.back();
    }
    else{
      step.previous();
    }
  }

  onSubmit(step : MatStepper){
    // this.Userservice.getStudentData().subscribe(
    //   (res) => {
    //     console.log("get data check");
    //     console.log(res);
    //   }
    // );
    this.stepper = step;
    this.optionBack = false;
    this.studentValue = !this.studentValue;
    console.log(this.studentDetails.onSave());
    this.StudentdetailsId = this.studentDetails.onSave();
  }

  onNext(){
    this.hiddenEditIcon = true;
    // this.studentValue = !this.studentValue;
    this.Userservice.sendDataToPost(this.StudentdetailsId).subscribe(
          (res) => {
            console.log(res);
            this.Userservice.sendGetReqStudent(this.StudentdetailsId['Id']).subscribe(
              (result)=>
                {
                  // console.log(res);
                  this.studentdata = result;
                  this.Userservice.setStudentData(result);
                  this.id = this.studentdata['Id'];
                });
            // this.studentdataid.emit(this.studentcarddetails);
          },
          (error) =>{
            console.log(error);
          }
        )
  }

  onFinish(){
    // this.Userservice.setStudentData(this.studentdata);
    this.Userservice.setStudentDetails(this.id);
    this.router.navigate(['/studentdetailscard']);
  }

}
