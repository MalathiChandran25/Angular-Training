"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentCardComponent = void 0;
var core_1 = require("@angular/core");
var StudentCardComponent = /** @class */ (function () {
    function StudentCardComponent(route, Userservice, location) {
        this.route = route;
        this.Userservice = Userservice;
        this.location = location;
        // @Input() studentcarddetails : students;
        this.no_value = 'NA';
    }
    StudentCardComponent.prototype.getStudentData = function () {
        var _this = this;
        console.log("data got");
        var name = this.route.snapshot.paramMap.get('Name');
        console.log(name);
        this.Userservice.getStudentData(name)
            .subscribe(function (studentcarddetails) { return _this.studentcarddetails = studentcarddetails; });
    };
    StudentCardComponent.prototype.goBack = function () {
        this.location.back();
    };
    StudentCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getStudentData();
        this.Userservice.getStudentDetails().subscribe(function (res) {
            console.log(res);
            _this.studentcarddetails = res;
        });
    };
    StudentCardComponent = __decorate([
        core_1.Component({
            selector: 'app-student-card',
            templateUrl: './student-card.component.html',
            styleUrls: ['./student-card.component.scss']
        })
    ], StudentCardComponent);
    return StudentCardComponent;
}());
exports.StudentCardComponent = StudentCardComponent;
