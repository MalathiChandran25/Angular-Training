"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentDetailsComponent = void 0;
var core_1 = require("@angular/core");
var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent(router, studentlist) {
        this.router = router;
        this.studentlist = studentlist;
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentlist.getdatas().subscribe(function (result) {
            console.log(result);
            _this.studentdatalist = result;
            _this.studentlist.addstudentdata(_this.studentdatalist);
        });
    };
    StudentDetailsComponent.prototype.onSubmit = function (student) {
        this.studentlist.setStudentDetails(student);
        this.router.navigate(['/studentdetails']);
    };
    StudentDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-student-details',
            templateUrl: './student-details.component.html',
            styleUrls: ['./student-details.component.scss']
        })
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());
exports.StudentDetailsComponent = StudentDetailsComponent;
