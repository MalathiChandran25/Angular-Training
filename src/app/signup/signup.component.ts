import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm = new FormGroup({});

  nameValue : boolean = false;
  emailValue : boolean = false;
  passwordValue : boolean = false;
  roleValue : boolean = false;
  error: any;
  roleList : any = ['student','admin','mentor'];
  submitted: boolean;

  constructor(private userservice : UsersdataService,private fb : FormBuilder,
    public activeModal: NgbActiveModal,public modal : NgbModal){
    this.signupForm = this.fb.group(
      {
        name : ['',[Validators.required]],
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required]],
        role: ['',[Validators.required]],
        checkTerms: ['',[Validators.required]]
      },
      {
        validator: this.checkCheckbox
      });
  }

  ngOnInit(){}

  displayNameField(){
    this.nameValue = true;
  }
  displayEmailField(){
    this.emailValue = true;
  }
  displayPasswordField(){
    this.passwordValue = true;
  }
  displayRoleField(){
    this.roleValue = true;
  }
  checkCheckbox(c: AbstractControl){
    if(c.get('checkTerms').value == false){
      return false;
    }
    else
      return true;
  } 

  onSubmit(){
    // this.submitted = true;
    this.userservice.addData(this.signupForm.value).subscribe(
      (res) => {
        console.log("post res");
        console.log(res);
        this.activeModal.close();

      },
      (error) => {
        this.error = error.error.error;
      }
    );
  }

  onGotoLogin(){
    this.activeModal.close();
    this.modal.open(LoginComponent);
  }

}
