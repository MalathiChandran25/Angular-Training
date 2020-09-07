"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, httpClient, modalService, fb) {
        this.userservice = userservice;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.fb = fb;
        this.loginForm = new forms_1.FormGroup({});
        this.typeValue = false;
        this.changeModal = new core_1.EventEmitter();
        this.submittedFormvalue = new core_1.EventEmitter();
        this.displayProfile = new core_1.EventEmitter();
    }
    LoginComponent.prototype.sendchangeModalValue = function (data) {
        this.changeModal.emit(data);
    };
    LoginComponent.prototype.displayLoginName = function (data) {
        console.log("display name");
        console.log(data);
        this.displayProfile.emit(data);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            name: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]]
        });
    };
    LoginComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    LoginComponent.prototype.getDismissReason = function (reason) {
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
    LoginComponent.prototype.displayInputField = function () {
        this.typeValue = true;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userservice.sendPostRequest(this.loginForm.value).subscribe(function (res) {
            console.log("post res");
            console.log(res);
            _this.modalname.dismiss("successful login");
            _this.loginName = _this.loginForm.value.name;
            // this.displayLoginName(true);
            _this.submittedFormvalue.emit("true");
            _this.error = "";
        }, function (error) {
            _this.error = error.error.error;
        });
    };
    __decorate([
        core_1.Input()
    ], LoginComponent.prototype, "modalname");
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "changeModal");
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "submittedFormvalue");
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "displayProfile");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
