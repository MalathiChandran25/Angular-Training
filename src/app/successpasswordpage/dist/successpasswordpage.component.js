"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SuccesspasswordpageComponent = void 0;
var core_1 = require("@angular/core");
var header_component_1 = require("./../header/header.component");
var SuccesspasswordpageComponent = /** @class */ (function () {
    function SuccesspasswordpageComponent(modalservice, route, router, userservice, studentlist) {
        this.modalservice = modalservice;
        this.route = route;
        this.router = router;
        this.userservice = userservice;
        this.studentlist = studentlist;
        this.loginValue = new core_1.EventEmitter();
    }
    SuccesspasswordpageComponent.prototype.ngOnInit = function () {
        console.log(this.before);
        this.modal = this.before;
        // console.log(this.childModal);
        // this.route.params.subscribe(
        //   params => {
        //     console.log(params);
        //   }
        // );
        // this.route.data.subscribe(
        //   (v) => {
        //   console.log(v);
        //   }
        // );
    };
    SuccesspasswordpageComponent.prototype.onClick = function (data) {
        // console.log(this.modal);
        var modallogin = new header_component_1.HeaderComponent(this.modalservice, this.userservice, this.studentlist);
        modallogin.openLoginModal(this.modal, 'false');
        this.loginValue.emit(data);
    };
    __decorate([
        core_1.Input()
    ], SuccesspasswordpageComponent.prototype, "before");
    __decorate([
        core_1.Output()
    ], SuccesspasswordpageComponent.prototype, "loginValue");
    SuccesspasswordpageComponent = __decorate([
        core_1.Component({
            selector: 'app-successpasswordpage',
            templateUrl: './successpasswordpage.component.html',
            styleUrls: ['./successpasswordpage.component.scss']
        })
    ], SuccesspasswordpageComponent);
    return SuccesspasswordpageComponent;
}());
exports.SuccesspasswordpageComponent = SuccesspasswordpageComponent;
