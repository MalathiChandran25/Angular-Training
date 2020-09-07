"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StudentdataService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var StudentdataService = /** @class */ (function () {
    function StudentdataService(http) {
        this.http = http;
        this.url = "http://localhost:3002/school/student-details";
        this.studentdata = new rxjs_1.BehaviorSubject(null);
        this.Templaterefer = new rxjs_1.BehaviorSubject([]);
    }
    // serviceProvider$ = this.studentdata.asObservable();
    StudentdataService.prototype.setStudentDetails = function (student) {
        this.studentdata.next(student);
    };
    StudentdataService.prototype.getStudentDetails = function () {
        return this.studentdata.asObservable();
    };
    // serviceProvider$ = this.studentdata.asObservable();
    StudentdataService.prototype.setTemplate = function (template) {
        this.Templaterefer.next(template);
        // this.Templaterefer.complete();
    };
    StudentdataService.prototype.getTemplateArray = function (data) {
        var currentvalue = this.Templaterefer.value;
        var updateValue = __spreadArrays(currentvalue, [data]);
        var firstArray = updateValue.slice(0, 1);
        this.Templaterefer.next(firstArray);
    };
    StudentdataService.prototype.getTemplate = function () {
        return this.Templaterefer.asObservable();
    };
    StudentdataService.prototype.getdatas = function () {
        return this.http.get(this.url);
    };
    StudentdataService.prototype.addstudentdata = function (studentsdatas) {
        console.log("data come");
        console.log(studentsdatas);
        this.studentDataObject = studentsdatas;
        console.log("add datas");
        console.log(this.studentDataObject);
    };
    StudentdataService.prototype.getStudentData = function (name) {
        return rxjs_1.of(this.studentDataObject.find(function (student) { return student.Name === name; }));
    };
    StudentdataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StudentdataService);
    return StudentdataService;
}());
exports.StudentdataService = StudentdataService;
