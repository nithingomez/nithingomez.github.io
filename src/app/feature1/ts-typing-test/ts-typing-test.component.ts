import { Component, OnInit } from '@angular/core';
import { Employee } from './models/models';

// interface Employee {
//   age: number;
//   name: string;
//   phone?: number;
// }

@Component({
  selector: 'app-ts-typing-test',
  templateUrl: './ts-typing-test.component.html',
  styleUrls: ['./ts-typing-test.component.scss']
})

export class TsTypingTestComponent implements OnInit {


  constructor() { }

  name!: string;
  age!: number;

  ngOnInit(): void {
    this.initializeData();
  }


  initializeData(): Employee {
    this.name = 'Nithin Gomez';
    this.age = 31;
    return {
      'name': this.name,
      'age': this.age,
      'phone': 8129297730
    };
  }

}
