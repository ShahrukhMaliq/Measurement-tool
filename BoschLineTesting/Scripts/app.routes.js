// ====== ./app/app.routes.ts ======
"use strict";
var router_1 = require("@angular/router");
var cat_list_component_1 = require("./cats/cat-list.component");
var dog_list_component_1 = require("./dogs/dog-list.component");
var login_component_1 = require("./login/login.component");
var pageNotFound_component_1 = require("./pageNotFound.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var products_component_1 = require("./dashboard/Products/products.component");
var productDetails_component_1 = require("./dashboard/Products/productDetails.component");
var settings_component_1 = require("./dashboard/settings/settings.component");
var home_component_1 = require("./dashboard/home/home.component");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'cats', component: cat_list_component_1.CatListComponent },
    { path: 'dogs', component: dog_list_component_1.DogListComponent },
    { path: 'dogsabcdefghi', component: cat_list_component_1.CatListComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dash', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'products', component: products_component_1.ProductsComponent },
            { path: 'products/:id', component: productDetails_component_1.ProductDetailsComponent },
            { path: 'settings', component: settings_component_1.SettingsComponent }
        ]
    },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
