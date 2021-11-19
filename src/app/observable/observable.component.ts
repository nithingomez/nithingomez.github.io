import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableService } from '../shared/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  status: any;
  constructor(protected observableService: ObservableService) { }

  ngOnInit() {

  }


  startOrder() {
    this.observableService.observable().subscribe(value => {
      this.status = value;
    });
  }

}
