import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.scss']
})
export class ChildComponent2Component implements OnInit {
  messageFromChild2: string;
  counter = 0;
  constructor() { }

  ngOnInit() {
    this.messageFromChild2 = 'Initial Data from Child Component 2';
  }

  sendDatatoParent() {
    this.messageFromChild2 = `Data from Child Component 2 , COUNTER: ${this.counter}`;
    this.counter++;
  }

}
