import { UsersdataService } from './../usersdata.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup,  Validators, FormBuilder } from '@angular/forms';
import {Users} from '../users';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({});
  typeValue : boolean = false;
  error: string;
  loginName: any;
  @Output() profileNameValue : EventEmitter<string> = new EventEmitter<string>();
  
  displayInputField(){
    this.typeValue = true;
  }

  constructor(private userservice : UsersdataService,public httpClient: HttpClient,
    private modalService: NgbModal,private fb : FormBuilder,public activeModal: NgbActiveModal){
  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      name : ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit(){
    console.log(this.loginForm);
    this.userservice.sendPostRequest(this.loginForm.value).subscribe(
      (res) => {
        this.loginName = this.loginForm.value.name;
        console.log(this.loginName);
        // this.submittedFormvalue.emit(this.loginName);
        console.log("post res");
        console.log(res);
        this.error = "";
        this.profileNameValue.emit(this.loginName);
        this.activeModal.close();
      },
      (error) => {
        this.error = error.error.error;
      }
    );
  }

  onClick() {
    this.activeModal.close();
    this.modalService.open(ChangepasswordComponent);
  }

}

