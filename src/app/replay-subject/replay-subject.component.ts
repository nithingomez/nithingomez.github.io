import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/observable.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor(protected observableService: ObservableService) { }

  replaySubjectData: number;
  replaySubjectDataArray: number[] = [];
  ngOnInit() {
    this.observableService.replaySubjectData.next(1);
    this.observableService.replaySubjectData.next(2);
    this.observableService.replaySubjectData.next(3);
    this.observableService.replaySubjectData.next(4);
    this.observableService.replaySubjectData.next(5);
    this.observableService.replaySubjectData.subscribe(val => {
      this.replaySubjectData = val;
      this.replaySubjectDataArray.push(val);
    });
  }


  sendReplaySubjectData() {
    this.observableService.setReplaySubjectData(Math.random());
  }
}
