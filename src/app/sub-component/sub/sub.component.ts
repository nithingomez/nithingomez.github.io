import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  _nameInput!: string;

  @Input() set dataFromMain(value: string) {
    this._nameInput = value + ' xxx';
  }
  get dataFromMain(): string {
    return this._nameInput;
  }

  @Output() dataFromSub = new EventEmitter();

  constructor() { }
  // @Input('dataFromMain') nameInput: string;
  ngOnInit() {
  }


  sendToMain() {
    this.dataFromSub.emit(this.dataFromMain);
  }

}
