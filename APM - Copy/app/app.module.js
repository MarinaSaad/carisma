"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var user_service_1 = require("./shared/services/user.service");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./routing/app-routing.module");
// components
var app_component_1 = require("./app.component");
var user_component_1 = require("./users/user.component");
var products_component_1 = require("./products/products.component");
var selected_user_component_1 = require("./users/selected-user.component");
var product_component_1 = require("./products/product.component");
// directives and pipes
var product_service_1 = require("./shared/services/product.service");
var auto_grow_directive_1 = require("./shared/directives/auto-grow.directive");
var filter_pipe_1 = require("./shared/pipes/filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule],
        declarations: [
            app_component_1.AppComponent,
            selected_user_component_1.SelectedUserComponent,
            user_component_1.UsersComponent,
            auto_grow_directive_1.AutoGrowDirective,
            filter_pipe_1.FilterPipe,
            products_component_1.ProductsComponent,
            product_component_1.ProductComponent
        ],
        providers: [user_service_1.UserService, product_service_1.ProductService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map