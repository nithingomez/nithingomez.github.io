import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/observable.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor(protected observableService: ObservableService) { }
  behaviouralSubjectData: number;
  ngOnInit() {
    this.observableService.behaviouralSubjectData.next(15);
    this.observableService.behaviouralSubjectData.subscribe(val => {
      this.behaviouralSubjectData = val;
    });
  }


  sendBehaviouralSubjectData() {
    // this.observableService.setBehaviouralSubjectData(Math.random());
    this.observableService.behaviouralSubjectData.next(Math.random());

  }
}
