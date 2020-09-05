"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var student_details_component_1 = require("./student-details/student-details.component");
var student_card_component_1 = require("./student-card/student-card.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/common/http");
var header_component_1 = require("./header/header.component");
var login_component_1 = require("./login/login.component");
var signup_component_1 = require("./signup/signup.component");
var changepassword_component_1 = require("./changepassword/changepassword.component");
var successpasswordpage_component_1 = require("./successpasswordpage/successpasswordpage.component");
var stepperform_component_1 = require("./stepperform/stepperform.component");
var animations_1 = require("@angular/platform-browser/animations");
var stepper_1 = require("@angular/material/stepper");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                student_details_component_1.StudentDetailsComponent,
                student_card_component_1.StudentCardComponent,
                header_component_1.HeaderComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                changepassword_component_1.ChangepasswordComponent,
                successpasswordpage_component_1.SuccesspasswordpageComponent,
                stepperform_component_1.StepperformComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                stepper_1.MatStepperModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
