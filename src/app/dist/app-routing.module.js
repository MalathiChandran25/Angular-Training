"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var student_details_component_1 = require("./student-details/student-details.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var student_card_component_1 = require("./student-card/student-card.component");
var login_component_1 = require("./login/login.component");
var successpasswordpage_component_1 = require("./successpasswordpage/successpasswordpage.component");
var stepperform_component_1 = require("./stepperform/stepperform.component");
var routes = [
    {
        path: '',
        redirectTo: '/studentlist',
        pathMatch: 'full'
    },
    {
        path: 'studentlist',
        component: student_details_component_1.StudentDetailsComponent
    },
    {
        path: 'studentdetails',
        component: student_card_component_1.StudentCardComponent
    },
    {
        path: 'successpassword',
        component: successpasswordpage_component_1.SuccesspasswordpageComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    // {
    //   path: 'signup',
    //   component: ModalComponent,
    //   data : {some_data : 'false'}
    // },
    {
        path: 'stepperform',
        component: stepperform_component_1.StepperformComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
