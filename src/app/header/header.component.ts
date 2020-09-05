import { SignupComponent } from './../signup/signup.component';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef, OnChanges, NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';
import { StudentdataService } from '../studentdata.service';
import {take, first} from 'rxjs/operators'
import { ReplaySubject } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  profileName : string = "";
  modalRef: any;

  // changeProfilename(name : string){
  //   console.log(name);
  //   this.profileName = name;
  // }

  constructor(private modal: NgbModal){}

  onClick() {
    const modalRef  = this.modal.open(LoginComponent);
    modalRef.componentInstance.profileNameValue.subscribe(
      (name) => 
      {
        console.log(name);
        this.profileName = name;
      }
    );
  }

  onSignUp(){
    this.modal.open(SignupComponent);
  }

  ngOnInit(){

  }
}
