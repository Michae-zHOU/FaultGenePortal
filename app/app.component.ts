import { Component } from '@angular/core';
import { landingController } from './landing.component';
@Component({
  selector: 'my-app',
  template: ` <div ng-init="styles=[{backgroundColor: 'red'}]">
              <h4 align = "left"><strong>Fault Gene Working Group</strong></h4>
              <h1 align = "center">
                <img [src]= "img_fault_gene_icon" alt="image" width="150" height="120">
              </h1>
              <br><br>
              <my-landing></my-landing>
              `,
  styles:  [`h4 {
    color: dark orange;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.20);
    }`,
  ],
  directives: [landingController]
})
export class AppComponent {
    public img_fault_gene_icon = "./Image/OYY32rm68.png";
}
