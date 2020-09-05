import { students } from './../students';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {


  @Input() studentdata : boolean = false;
  @Input() steppervariable : any;
  @Input() hiddenIcon : boolean = false;

  no_value :string = 'NA';

  studentcarddetails : any;
  studentdetails: any;
  unsubcribegetdata: any;
  requestStudent: any;

  constructor(private route: ActivatedRoute,
    private Userservice: StudentdataService,
    private location: Location,private router: Router) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    console.log(this.studentdata);
    this.Userservice.getStudentData().subscribe(
      (res) =>
      {
        this.studentdetails = res;
        console.log(this.studentdetails);
      }
    )
  }

  ngOnChanges(){
    console.log(this.studentdata);
    console.log("on change");
    // this.Userservice.getStudentData().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.studentdetails = res;
    //   }
    //   ); 
  }

  // ngOnDestroy(){
  //   this.requestStudent.unsubscribe();
  // }

  onGoto(){
    if(this.steppervariable){
      this.steppervariable.previous();
    }
    else{
      // this.Userservice.setStudentData(this.studentdetails);
      this.router.navigate(['/stepperform']);
    }
  }

  onChangedata(student){
    console.log("on change");
    console.log(student);
    this.studentdetails = student;
  }

}
