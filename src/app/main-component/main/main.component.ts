import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  name: string = '';
  modifiedNameFromSub: string = '';

  ngOnInit() {
    this.name = 'Nithin Gomez';
  }

  getModifiedNameFromSub(modifiedName) {
    this.modifiedNameFromSub = modifiedName;
  }

}
