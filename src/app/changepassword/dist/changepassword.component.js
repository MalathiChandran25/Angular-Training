"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangepasswordComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var confirmed_validator_1 = require("./../confirmed.validator");
var ChangepasswordComponent = /** @class */ (function () {
    // @ContentChild('mymodallogin') before: TemplateRef<any>;
    function ChangepasswordComponent(userservice, fb, route, router) {
        this.userservice = userservice;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.changepasswordForm = new forms_1.FormGroup({});
        this.typeValue = false;
        this.loginValue = new core_1.EventEmitter();
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        // console.log(this.modalname);
        this.changepasswordForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required]],
            confirmpassword: ['', [forms_1.Validators.required]]
        }, {
            validator: confirmed_validator_1.ConfirmedValidator('password', 'confirmpassword')
        });
    };
    ChangepasswordComponent.prototype.displayInputField = function () {
        this.typeValue = true;
    };
    Object.defineProperty(ChangepasswordComponent.prototype, "formControls", {
        get: function () {
            return this.changepasswordForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ChangepasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.router.navigate(['/successpassword']);
        this.userservice.updatepassword(this.changepasswordForm.value).subscribe(function (res) {
            console.log("update password");
            console.log(res);
            _this.modalname.dismiss('routing');
            _this.router.navigate(['successpassword']);
            _this.loginValue.emit(false);
        }, function (error) {
            console.log(error.error.error);
        });
    };
    __decorate([
        core_1.Input()
    ], ChangepasswordComponent.prototype, "modalname");
    __decorate([
        core_1.Output()
    ], ChangepasswordComponent.prototype, "loginValue");
    ChangepasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-changepassword',
            templateUrl: './changepassword.component.html',
            styleUrls: ['./changepassword.component.scss']
        })
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());
exports.ChangepasswordComponent = ChangepasswordComponent;
