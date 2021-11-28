import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenth',
  templateUrl: './tenth.component.html',
  styleUrls: ['./tenth.component.scss']
})
export class TenthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'Global Error Handler in Angular';

  throwError1() {
    // @ts-ignore
    var a = b;
  }

  throwError2() {
    try {
      // @ts-ignore
      var a = b;
    } catch (error) {
      //here you can handle the error
      //
    }
  }

}
