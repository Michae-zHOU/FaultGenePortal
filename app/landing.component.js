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
var landingController = (function () {
    function landingController() {
        this.img_fault_policies = "./Image/Fault_Policies.png";
        this.img_exception = "./Image/Exceptions.png";
        this.img_operator_input = "./Image/Operator_Input.png";
        this.img_tribal_knowledge = "./Image/Tribal_Knowledge.png";
        this.address_fault_policies = "http://www.google.com";
        this.address_exception = "http://172.99.106.155/exceptions/#/";
        this.address_tribal_knowledge = "http://www.google.com";
        this.address__operator_input = "http://www.google.com";
    }
    landingController.prototype.onClick = function (value) {
        console.log(value);
    };
    landingController = __decorate([
        core_1.Component({
            selector: "my-landing",
            template: " <h1 layout = \"column\" align = \"center\">\n                    <div ng-app=\"myApp\" ng-controller=\"myCtrl\">\n                        <a href = {{address_fault_policies}}><img [src]=\"img_fault_policies\" width=\"120\" height=\"100\"></a>\n                        &nbsp;&nbsp;&nbsp;\n                        <a href = {{address_exception}}><img [src]=\"img_exception\" width=\"120\" height=\"100\"></a>\n                        &nbsp;&nbsp;&nbsp;\n                        <a href = {{address_tribal_knowledge}}><img [src]=\"img_tribal_knowledge\" width=\"120\" height=\"100\"></a>\n                        &nbsp;&nbsp;&nbsp;\n                        <a href = {{address__operator_input}}><img [src]=\"img_operator_input\" width=\"120\" height=\"100\"></a>\n                    </div>\n                    <script>\n                        var app = angular.module('myApp', []);\n                    </script>\n                    <br><br>\n                    <div class=\"form-group\">\n                        <label for=\"exampleTextarea\"></label>\n                        <textarea class=\"form-control\" id=\"InputText\" rows=\"10\" cols=\"150\" [(ngModel)] = \"input\" #textinput></textarea>\n                        <button (click)=\"onClick(textinput.value)\">Enter</button>\n                    </div>\n                    <br><br>\n                    <br><br>\n                </h1>\n              ",
            styles: [
                "   button {\n            padding: 0 6px 0 6px;\n            text-align: center;\n            text-transform: uppercase;\n            text-decoration:none;\n            border: none;\n            outline: none;\n            color : rgb(49, 46, 46);\n            background-color: rgba(63, 191, 118, 0.8);\n            font-size: 12px;\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);\n            line-height: 6rem;\n            width: 4rem;\n            height: 4rem;\n            min-width: 0;\n            border-radius: 50%;\n        }",
                "img {\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);\n        }",
                "textarea {\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);\n        }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], landingController);
    return landingController;
}());
exports.landingController = landingController;
//# sourceMappingURL=landing.component.js.map