"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(userservice, fb) {
        this.userservice = userservice;
        this.fb = fb;
        this.signupForm = new forms_1.FormGroup({});
        this.submitted = true;
        this.nameValue = false;
        this.emailValue = false;
        this.passwordValue = false;
        this.roleValue = false;
        this.roleList = ['student', 'admin', 'mentor'];
        this.goToLogin = new core_1.EventEmitter();
        this.signupForm = this.fb.group({
            name: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required]],
            role: ['', [forms_1.Validators.required]],
            checkTerms: ['', [forms_1.Validators.required]]
        }, {
            validator: this.checkCheckbox
        });
    }
    SignupComponent.prototype.gotoLoginPage = function (data) {
        this.goToLogin.emit(data);
    };
    SignupComponent.prototype.ngOnInit = function () {
        // console.log(this.modalname);
    };
    SignupComponent.prototype.checkCheckbox = function (c) {
        if (c.get('checkTerms').value == false) {
            return false;
        }
        else
            return true;
    };
    SignupComponent.prototype.displayNameField = function () {
        this.nameValue = true;
    };
    SignupComponent.prototype.displayEmailField = function () {
        this.emailValue = true;
    };
    SignupComponent.prototype.displayPasswordField = function () {
        this.passwordValue = true;
    };
    SignupComponent.prototype.displayRoleField = function () {
        this.roleValue = true;
    };
    Object.defineProperty(SignupComponent.prototype, "formControls", {
        get: function () {
            return this.signupForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.userservice.addData(this.signupForm.value).subscribe(function (res) {
            console.log("post res");
            console.log(res);
            _this.modalname.dismiss('successfully signed in');
        }, function (error) {
            _this.error = error.error.error;
        });
    };
    __decorate([
        core_1.Input()
    ], SignupComponent.prototype, "modalname");
    __decorate([
        core_1.Output()
    ], SignupComponent.prototype, "goToLogin");
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
