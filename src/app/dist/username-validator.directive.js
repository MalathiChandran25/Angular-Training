"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.usernameValidator = exports.UsernameValidatorDirective = void 0;
var core_1 = require("@angular/core");
var UsernameValidatorDirective = /** @class */ (function () {
    // userdatalist : Users[];
    function UsernameValidatorDirective(userservice) {
        this.userservice = userservice;
    }
    UsernameValidatorDirective = __decorate([
        core_1.Directive({
            selector: '[appUsernameValidator]'
        })
    ], UsernameValidatorDirective);
    return UsernameValidatorDirective;
}());
exports.UsernameValidatorDirective = UsernameValidatorDirective;
function usernameValidator(userdatalist) {
    return function (control) {
        console.log("usernamevalidators");
        console.log(userdatalist);
        if (control.value !== null && (userdatalist.find(function (userdata) { return userdata.name == control.value; }) || userdatalist.find(function (userdata) { return userdata.email == control.value; }))) {
            return { 'usernameValidator': true };
        }
        return null;
    };
}
exports.usernameValidator = usernameValidator;
