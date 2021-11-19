import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChildComponent2Component } from '../child-component2/child-component2.component';
import { Common2Service } from '../shared/common2.service';


@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit, AfterViewInit {


  name!: string;
  counter = 0;
  messages: any[] = [];
  messageReceived!: string;
  messageFromComponent2!: string;
  subscription: Subscription;

  @ViewChild(ChildComponent2Component) child: any;

  constructor(private commonService: Common2Service) {
    this.subscription = this.commonService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        this.messages = [];
      }
    });
  }

  ngOnInit() {
    this.name = 'Nithin Gomez';
    console.log('this.messages ' + JSON.stringify(this.messages));
  }

  ngAfterViewInit() {
    this.messageFromComponent2 = this.child.messageFromChild2;
  }


  sendData() {
    this.name = `Nithin Gomez, COUNTER: ${this.counter}`;
    this.counter++;
  }

  getMessageFromChild(messageFromChild: any) {
    this.messageReceived = messageFromChild;
  }

}
