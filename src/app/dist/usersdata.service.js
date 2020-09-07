"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersdataService = void 0;
var core_1 = require("@angular/core");
// import { Observable, of } from 'rxjs';
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var UsersdataService = /** @class */ (function () {
    function UsersdataService(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.url_users = "http://localhost:3002/login";
        this.url_add_data = "http://localhost:3002/addUser";
        this.url_changepassword = "http://localhost:3002/changePassword";
    }
    UsersdataService.prototype.sendPostRequest = function (data) {
        console.log("request inside data");
        console.log(data);
        return this.http.post(this.url_users, data);
    };
    UsersdataService.prototype.addData = function (data) {
        console.log("added data comes");
        console.log(data);
        return this.http.post(this.url_add_data, data);
    };
    UsersdataService.prototype.updatepassword = function (data) {
        console.log("update service");
        console.log(data);
        return this.http.put(this.url_changepassword, data);
    };
    UsersdataService.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UsersdataService.prototype.getDismissReason = function (reason) {
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
    UsersdataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersdataService);
    return UsersdataService;
}());
exports.UsersdataService = UsersdataService;
