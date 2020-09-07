import { Users } from './users';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { Observable, of } from 'rxjs';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url_users = "http://localhost:3002/login";

  url_add_data = "http://localhost:3002/addUser";

  url_changepassword = "http://localhost:3002/changePassword";

  closeResult: string;


  constructor(private http : HttpClient,private modalService: NgbModal) { }


  sendPostRequest(data: any) {
    console.log("request inside data");
    console.log(data);
    return this.http.post(this.url_users, data);
  }

  addData(data : any) {
    console.log("added data comes");
    console.log(data);
    return this.http.post(this.url_add_data,data);
  }

  updatepassword(data : any){
    console.log("update service");
    console.log(data);
    return this.http.put(this.url_changepassword,data);
  }
}
