
import { students } from './students';
import { Injectable, TemplateRef } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { first, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  url = "http://localhost:3002/school/student-details";

  url_post = "http://localhost:3002/student-details";
  
  sendGetRequest() {
    console.log("request inside student details");
    // console.log(data);
    return this.http.get(this.url);
  }
  sendGetReqStudent(data: any) {
    console.log("request inside student card");
    // console.log(data);
    return this.http.get(this.url,{params:{id: data}});
  }

  sendDataToPost(data : any){
    // console.log(data);
    return this.http.post(this.url_post,data);
  }

  studentDataObject : students[] ;

  constructor(private http : HttpClient) { }

  //get id of the studdent
  public studentdata : BehaviorSubject<number> = new BehaviorSubject<number>(null);

  setStudentDetails(studentId : number) {
    this.studentdata.next(studentId);
  }

  getStudentDetails(){
    return this.studentdata.asObservable();
  }

  //get student data 
  public studentdetails : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setStudentData(student) {
    this.studentdetails.next(student);
  }

  getStudentData(){
    return this.studentdetails.asObservable();
  }

  //get modal template
  public Templaterefer  : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setTemplate(template){
    this.Templaterefer.next(template);
    // this.Templaterefer.complete();
  }
  // getTemplateArray(data){
  //   const currentvalue = this.Templaterefer.value;
  //   const updateValue = [...currentvalue, data];
  //   const firstArray = updateValue.slice(0,1);
  //   this.Templaterefer.next(firstArray);
  // }

  getTemplate(){
    return this.Templaterefer.asObservable();
  }

  //get stepper student details
  public stepperstudentdetails : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  setStepperStudentData(student) {
    this.stepperstudentdetails.next(student);
  }

  getStepperStudentData(){
    return this.stepperstudentdetails.asObservable();
  }



  getdatas(){
    return this.http.get<students[]>(this.url);
  }
}
