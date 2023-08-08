/// <reference path="./../node_modules/@types/core-js/index.d.ts"/>
/// <reference path="./../node_modules/@types/hammerjs/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Imports
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// import { Ng2MaterialModule } from "ng2-material";
var ng2_auto_complete_1 = require("ng2-auto-complete");
var ng2_datetime_picker_1 = require("ng2-datetime-picker");
// Declarations
var app_component_1 = require("./app.component");
var cat_list_component_1 = require("./cats/cat-list.component");
var dog_list_component_1 = require("./dogs/dog-list.component");
var login_component_1 = require("./login/login.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var products_component_1 = require("./dashboard/Products/products.component");
var productCard_component_1 = require("./dashboard/Products/productCard.component");
var productDetails_component_1 = require("./dashboard/Products/productDetails.component");
var observationList_component_1 = require("./dashboard/Products/Observations/observationList.component");
var observationListItem_component_1 = require("./dashboard/Products/Observations/observationListItem.component");
var addObservationDialog_component_1 = require("./dashboard/Products/addObservationDialog.component");
var settings_component_1 = require("./dashboard/settings/settings.component");
var usersList_component_1 = require("./dashboard/settings/UsersList/usersList.component");
var userRolesList_component_1 = require("./dashboard/settings/UserRolesList/userRolesList.component");
var home_component_1 = require("./dashboard/home/home.component");
// import { SideNavComponent } from './sidenav/sidenav.component';
// import { AutoCompleteFilter } from './autoCompleteFilter/autoCompleteFilter.component';
// Providers
var user_service_1 = require("./services/user.service");
var userBackend_service_1 = require("./services/userBackend.service");
var products_service_1 = require("./services/products.service");
var productsBackend_service_1 = require("./services/productsBackend.service");
var productObservation_service_1 = require("./services/productObservation.service");
var productObservationBackend_service_1 = require("./services/productObservationBackend.service");
var productCategory_service_1 = require("./services/productCategory.service");
var productCategoryBackend_service_1 = require("./services/productCategoryBackend.service");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            material_1.MaterialModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_1.routing,
            ng2_auto_complete_1.Ng2AutoCompleteModule,
            ng2_datetime_picker_1.Ng2DatetimePickerModule
        ],
        declarations: [
            app_component_1.AppComponent,
            cat_list_component_1.CatListComponent,
            dog_list_component_1.DogListComponent,
            login_component_1.LoginComponent,
            pageNotFound_component_1.PageNotFoundComponent,
            dashboard_component_1.DashboardComponent,
            products_component_1.ProductsComponent,
            productCard_component_1.ProductCardComponent,
            addObservationDialog_component_1.AddObservationDialog,
            productDetails_component_1.ProductDetailsComponent,
            observationList_component_1.ObservationListComponent,
            observationListItem_component_1.ObservationListItemComponent,
            settings_component_1.SettingsComponent,
            home_component_1.HomeComponent,
            usersList_component_1.UsersListComponent,
            userRolesList_component_1.UserRolesListComponent
        ],
        providers: [
            user_service_1.UserService,
            userBackend_service_1.UserBackendService,
            products_service_1.ProductsService,
            productCategory_service_1.ProductCategoryService,
            productsBackend_service_1.ProductsBackendService,
            productObservation_service_1.ProductObservationService,
            productCategoryBackend_service_1.ProductCategoryBackendService,
            productObservationBackend_service_1.ProductObservationBackendService,
        ],
        entryComponents: [
            addObservationDialog_component_1.AddObservationDialog
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
