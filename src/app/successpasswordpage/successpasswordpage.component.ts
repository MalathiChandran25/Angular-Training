import { Component, OnInit,Input, ViewChild, ViewContainerRef, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsersdataService } from './../usersdata.service';
import { HeaderComponent } from './../header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentdataService } from './../studentdata.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-successpasswordpage',
  templateUrl: './successpasswordpage.component.html',
  styleUrls: ['./successpasswordpage.component.scss']
})
export class SuccesspasswordpageComponent implements OnInit {


  formvalue : any;

  // @ViewChild(HeaderComponent) headermodal :HeaderComponent;
  // // @Input() before : TemplateRef<any>;

  // modal : TemplateRef<any>;
  constructor(private modalservice : NgbModal,private route: ActivatedRoute,private  router: Router,
    private userservice : UsersdataService,private studentlist: StudentdataService){
  }



  ngOnInit(): void {
    // console.log(this.before);
    // this.modal = this.before;
    // console.log(this.childModal);
    // this.route.params.subscribe(
    //   params => {
    //     console.log(params);
    //   }
    // );
    // this.route.data.subscribe(
    //   (v) => {
    //   console.log(v);
    //   }
    // );
  }

  onClick(){
    this.modalservice.open(LoginComponent);
  }

}
