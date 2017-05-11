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
var core_1 = require('@angular/core');
var landing_component_1 = require('./landing.component');
var AppComponent = (function () {
    function AppComponent() {
        this.img_fault_gene_icon = "./Image/OYY32rm68.png";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " <div ng-init=\"styles=[{backgroundColor: 'red'}]\">\n              <h4 align = \"left\"><strong>Fault Gene Working Group</strong></h4>\n              <h1 align = \"center\">\n                <img [src]= \"img_fault_gene_icon\" alt=\"image\" width=\"150\" height=\"120\">\n              </h1>\n              <br><br>\n              <my-landing></my-landing>\n              ",
            styles: ["h4 {\n    color: dark orange;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);\n    }",
            ],
            directives: [landing_component_1.landingController]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map