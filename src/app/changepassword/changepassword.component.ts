import { Component, OnInit,Input, TemplateRef, Output, EventEmitter, ContentChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';
import { ConfirmedValidator } from './../confirmed.validator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  changepasswordForm = new FormGroup({});
  // changepasswordForm = this.fb.group({
  //   email : ['',[Validators.required,Validators.email]],
  //   password: ['', [Validators.required]],
  //   confirmpassword: ['', [Validators.required]]
  // },{
  //   validator: ConfirmedValidator("password","confirmpassword")
  // });

  typeValue : boolean = false;
  passwordValue: boolean = false;
  samepassword: boolean = false;

  @Input() modalname : any;

  @Output() loginValue : EventEmitter<boolean> = new EventEmitter<boolean>();

  // @ContentChild('mymodallogin') before: TemplateRef<any>;

  constructor(private userservice : UsersdataService,private fb: FormBuilder,
    private route: ActivatedRoute,private  router: Router, 
    private modalService: NgbModal,public activeModal: NgbActiveModal) { 
  }

  // passwordPattern : string ="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$$";
  // passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  ngOnInit(): void {
    // console.log(this.modalname);
    this.changepasswordForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    },{
      validator: ConfirmedValidator("password","confirmpassword")
    });
  }
  displayInputField(){
    this.typeValue = true;
  }
  displayPasswordField(){
    this.passwordValue = true;
  }
  displaysamePasswordField(){
    this.samepassword = true;
  }
  
  get formControls(){
    return this.changepasswordForm.controls;
  }
  onSubmit() {
    // this.router.navigate(['/successpassword']);
    this.userservice.updatepassword(this.changepasswordForm.value).subscribe(
      (res) => {
        console.log("update password");
        console.log(res);        
        this.loginValue.emit(false);
        this.activeModal.close();
        this.router.navigate(['successpassword']);
      },
      (error) => {
        console.log(error.error.error);
      }
    );
  }
}
