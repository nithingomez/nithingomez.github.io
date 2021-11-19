import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/observable.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor(protected observableService: ObservableService) {
    this.observableService.subjectData.subscribe(val => {
      this.subjectData = val;
    });
  }
  subjectData: number;
  ngOnInit() {

  }


  sendSubjectData() {
    this.observableService.subjectData.next(Math.random());
  }

}
