import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges {

  @Input('dataFromParent')
  input!: string;

  @Output() dataFromChild = new EventEmitter();
  status!: string;
  counter = 0;

  constructor() { }

  ngOnInit() {
    this.dataFromChild.emit('Initial Child Data');
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['input']) {

      this.status = `Change Detected:  ${JSON.stringify(simpleChanges['input'])}`;

    }
  }


  sendDatatoParent() {
    this.dataFromChild.emit(`Sending Child Data  , COUNTER: ${this.counter}`);
    this.counter++;
  }

}
