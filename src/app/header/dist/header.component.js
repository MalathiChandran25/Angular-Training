"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, userservice, studentlist) {
        this.modalService = modalService;
        this.userservice = userservice;
        this.studentlist = studentlist;
        this.count = 1;
        this.displayChangePassword = false;
        this.openLogin = false;
        this.displayLoginPage = false;
        this.profileNameValue = "";
    }
    HeaderComponent.prototype.open = function (content) {
        var _this = this;
        console.log(content);
        this.displayChangePassword = false;
        console.log("open");
        console.log(this.displayChangePassword);
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HeaderComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HeaderComponent.prototype.toggleOpenLoginVar = function (change) {
        this.openLogin = change;
        console.log("openlogin var");
        console.log(this.openLogin);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        console.log("modal");
        console.log(this.mymodal);
        // this.studentlist.setTemplate();
    };
    HeaderComponent.prototype.ngOnChanges = function () {
        this.displayChangePassword = false;
    };
    HeaderComponent.prototype.changePasswordModal = function (displayModal) {
        console.log(displayModal);
        this.displayChangePassword = displayModal;
        if (this.openLogin) {
            this.openLogin = false;
        }
    };
    HeaderComponent.prototype.changeLoginValue = function (logindata) {
        this.openLogin = logindata;
        this.displayChangePassword = true;
    };
    HeaderComponent.prototype.changeToProfileName = function (event) {
        console.log("profileName variable");
        console.log(event);
        // this.profileNameValue = profileName;
        // console.log(this.profileNameValue);
    };
    HeaderComponent.prototype.loginPage = function (displayLogin) {
        this.openLogin = false;
        this.displayChangePassword = false;
    };
    HeaderComponent.prototype.openLoginModal = function (modalName, modalChangevalue) {
        var _this = this;
        console.log("open modal login pass");
        if (this.mymodal) {
            if (modalName._declarationTContainer.localNames[0] == "mymodallogin") {
                console.log("if 2 one");
                this.studentlist.setTemplate(modalName);
                // if(this.count == 0){
                //   // this.studentlist.getComplete();
                //   this.count =1;
                // }
                // this.mymodal = modalName;
                // this.studentlist.getTemplate().subscribe(
                //   (res) =>{
                //     this.mymodal = res;
                //     console.log(this.mymodal);
                // });
            }
            // this.displayChangePassword = false;
        }
        else {
            this.studentlist.getTemplate().subscribe(function (res) {
                modalName = res;
                console.log(_this.mymodal);
            }, function (error) {
                console.log(error);
            });
        }
        this.displayChangePassword = false;
        this.open(modalName);
        this.toggleOpenLoginVar(modalChangevalue);
    };
    __decorate([
        core_1.ViewChild('mymodallogin')
    ], HeaderComponent.prototype, "mymodal");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
