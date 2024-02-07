import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  sampaleData: string = "This is directive data";
  age: number = 20;
  showData: boolean = true;

  subject: any = ['Subject', 'Marathi', 'Hindi', 'Math', 'History', 'Geography']

  country: string = "IND";


  //Attribute directive
  public testClass: any;
  public testStyle: any;
  constructor() {
    //   if (this.age > 18 && this.showData == false) {
    //     this.testClass = "one"
    //   } else {
    //     this.testClass = "two"
    //   }

    // if (this.age > 18) {
    //   this.testStyle = "one"
    // } else {
    //   this.testStyle = "two"
    // }
    if (this.age > 18) {
      this.testStyle = { 'background-color': 'blue' };
    } else {
      this.testStyle = { 'background-color': 'yellow' };
    }


  }
}
