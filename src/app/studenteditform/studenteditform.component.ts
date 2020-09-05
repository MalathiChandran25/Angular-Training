import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { students } from '../students';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentdataService } from "../studentdata.service"
@Component({
  selector: 'app-studenteditform',
  templateUrl: './studenteditform.component.html',
  styleUrls: ['./studenteditform.component.scss']
})
export class StudenteditformComponent implements OnInit {

  inputValue : boolean = true;
  studentdata : any;
  studentcarddetails: number;
  @Input() studentdataid : number;
  studentsample: any;
  enableButton: boolean = false;
  @Output() changeButton : EventEmitter<boolean> = new EventEmitter<boolean>();
  dateChange: string;
  date: Date;
  mnth: string;
  day: string;

  public changeToEnableButton(){
    this.changeButton.emit(this.enableButton);
  }

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  // studenteditForm = new FormGroup({});
  studenteditForm = this.fb.group({
    Id : [''],
    RegestrationNo: [''],
    Name : ['',[Validators.required]],
    Class: ['',[Validators.required]],
    Division: ['',[Validators.required]],
    Rank: ['',[Validators.required]],
    Fee: ['',[Validators.required]],
    DueDate: ['',[Validators.required]],
    ContactNo: ['',[Validators.required]],
    Address: ['',[Validators.required]]
  });

  constructor(private fb : FormBuilder,private router: ActivatedRoute,private Userservice: StudentdataService) { }

  ngOnInit(): void {
    this.Userservice.sendGetReqStudent(this.studentdataid).subscribe(
      (res)=>
      {
        console.log(res);
        this.studentdata=res;
        console.log("student data");
        console.log(this.studentdata);
        console.log(this.studentdata.Name);
        this.studenteditForm.patchValue(this.studentdata);
      }
    );
    this.formControlNameValueChanges();
    console.log("on init log");
    console.log(this.enableButton);


    // console.log(this.studentFormData);
    // this.studenteditForm.patchValue(this.studentFormData);
  }

  ngOnChanges(){
    this.Userservice.setStudentData(this.studentdata);  
  }
  
  displayTextField(){
    this.inputValue = !this.inputValue;
  }

  onGetFormValue(){
    return this.studentdata;
  }

  onSave() : any{
    console.log(this.studenteditForm.value['DueDate']);
    this.date = new Date(this.studenteditForm.value['DueDate']),
    this.mnth = ("0" + (this.date.getMonth() + 1)).slice(-2),
    this.day = ("0" + this.date.getDate()).slice(-2);
    this.dateChange = [this.date.getFullYear(), this.mnth, this.day].join("-");
    console.log(this.dateChange);
    this.studenteditForm.value['DueDate'] = this.dateChange;
    console.log(this.studenteditForm.value);
    this.Userservice.setStudentData(this.studenteditForm.value);
    return this.studenteditForm.value;
  }


  //valuedChanges() method for getting changes of form values

  formControlNameValueChanges(){
    this.studenteditForm.valueChanges.subscribe(
      (mode : any) => {
        console.log(mode);
        if ((JSON.stringify(mode) !== JSON.stringify(this.studentdata))){
          if(this.studenteditForm.invalid){
            this.enableButton = false;
          this.changeToEnableButton();
          }
          else
          {
            this.enableButton = true;
            this.changeToEnableButton();
          }
        }
        else{
          this.enableButton = false;
          this.changeToEnableButton();
        }
      }
    );
    // this.studenteditForm.get('Class').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.Class){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
    // this.studenteditForm.get('Division').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.Division){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
    // this.studenteditForm.get('Rank').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.Rank){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
    // this.studenteditForm.get('Fee').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.Fee){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
    // this.studenteditForm.get('DueDate').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.DueDate){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
    // this.studenteditForm.get('ContactNo').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.ContactNo){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
    // this.studenteditForm.get('Address').valueChanges.subscribe(
    //   (mode: string) => {
    //     console.log(mode);
    //     if (mode != this.studentdata.Address){
    //       this.enableButton = true;
    //       this.changeToEnableButton();
    //     }
    //     else{
    //       this.enableButton = false;
    //       this.changeToEnableButton();
    //     }
    //   }
    // );
  }
}
