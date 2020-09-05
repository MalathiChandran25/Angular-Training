import { StudentdataService } from './../studentdata.service';
import { students } from './../students';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent{

  studentdatalist : any;
  
  constructor(private router: Router,private studentlist : StudentdataService) { }

  ngOnInit(): void {
    this.studentlist.sendGetRequest().subscribe((result) => {
        console.log(result);
        this.studentdatalist=result;
    });
  }

  onSubmit(student){
    console.log(student.Id);
    this.studentlist.setStudentDetails(student.Id);
    this.studentlist.sendGetReqStudent(student.Id).subscribe(
      (res)=>
        {
          console.log(res);
          this.studentlist.setStudentData(res);
          this.router.navigate(['/studentdetailscard']);
          // this.studentdetails = res;
          // this.Userservice.setStudentData(res);
        }
    );
  }

}
