"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====== ./app/app.component.ts ======
var core_1 = require("@angular/core");
var user_service_1 = require("./services/user.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    AppComponent.prototype.onLogin = function (usr) {
        usr ? this.user = usr : null;
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log('init app.component');
        console.log(this.user);
        // if (this.user === undefined || this.user === null) {
        //     this.router.navigate(['/']);
        // } 
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.userSubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './templates/app.component.tpl.html',
        styleUrls: ['./templates/app.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
