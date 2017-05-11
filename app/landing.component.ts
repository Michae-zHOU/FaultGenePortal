import { Component } from '@angular/core';

@Component({
    selector: "my-landing",
    template: ` <h1 layout = "column" align = "center">
                    <div ng-app="myApp" ng-controller="myCtrl">
                        <a href = {{address_fault_policies}}><img [src]="img_fault_policies" width="120" height="100"></a>
                        &nbsp;&nbsp;&nbsp;
                        <a href = {{address_exception}}><img [src]="img_exception" width="120" height="100"></a>
                        &nbsp;&nbsp;&nbsp;
                        <a href = {{address_tribal_knowledge}}><img [src]="img_tribal_knowledge" width="120" height="100"></a>
                        &nbsp;&nbsp;&nbsp;
                        <a href = {{address__operator_input}}><img [src]="img_operator_input" width="120" height="100"></a>
                    </div>
                    <script>
                        var app = angular.module('myApp', []);
                    </script>
                    <br><br>
                    <div class="form-group">
                        <label for="exampleTextarea"></label>
                        <textarea class="form-control" id="InputText" rows="10" cols="150" [(ngModel)] = "input" #textinput></textarea>
                        <button (click)="onClick(textinput.value)">Enter</button>
                    </div>
                    <br><br>
                    <br><br>
                </h1>
              `,
    styles:  [
        `   button {
            padding: 0 6px 0 6px;
            text-align: center;
            text-transform: uppercase;
            text-decoration:none;
            border: none;
            outline: none;
            color : rgb(49, 46, 46);
            background-color: rgba(63, 191, 118, 0.8);
            font-size: 12px;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
            line-height: 6rem;
            width: 4rem;
            height: 4rem;
            min-width: 0;
            border-radius: 50%;
        }`,
        `img {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);
        }`,
        `textarea {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);
        }`
    ]
})
export class landingController{
    public img_fault_policies = "./Image/Fault_Policies.png";
    public img_exception = "./Image/Exceptions.png";
    public img_operator_input = "./Image/Operator_Input.png";
    public img_tribal_knowledge = "./Image/Tribal_Knowledge.png";
    public address_fault_policies = "http://www.google.com";
    public address_exception = "http://172.99.106.155/exceptions/#/";
    public address_tribal_knowledge = "http://www.google.com";
    public address__operator_input = "http://www.google.com";
    public onClick(value){
        console.log(value);
    }
}
