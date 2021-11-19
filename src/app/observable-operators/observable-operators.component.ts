import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/observable.service';

@Component({
  selector: 'app-observable-operators',
  templateUrl: './observable-operators.component.html',
  styleUrls: ['./observable-operators.component.scss']
})
export class ObservableOperatorsComponent implements OnInit {

  constructor(protected observableService: ObservableService) { }
  square: any;
  ngOnInit() {
  }


  squareNumber() {
    this.observableService.observableOperators().subscribe(value => {
      this.square = value;
    });
  }

}
