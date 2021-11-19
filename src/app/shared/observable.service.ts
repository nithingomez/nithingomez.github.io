import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {


  subjectData = new Subject<number>();
  behaviouralSubjectData = new BehaviorSubject<number>(11);
  replaySubjectData = new ReplaySubject<number>(4);

  constructor() { }

  observable() {
    const observable = new Observable(observer => {

      setTimeout(() => {
        observer.next('In Progress');
      }, 2000);


      setTimeout(() => {
        observer.next('Processing');
      }, 4000);


      setTimeout(() => {
        observer.next('Complete');
      }, 6000);
    });

    return observable;
  }


  observableOperators() {
    // const observable = new Observable(observer => {

    //   setTimeout(() => {
    //     observer.next(1);
    //   }, 2000);


    //   setTimeout(() => {
    //     observer.next(2);
    //   }, 4000);


    //   setTimeout(() => {
    //     observer.next(3);
    //   }, 6000);


    // }).pipe(
    //   map(num => +num * +num)
    // );

    // return observable;

    return new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 2000);


      setTimeout(() => {
        observer.next(2);
      }, 4000);


      setTimeout(() => {
        observer.next(3);
      }, 6000);


    }).pipe(
      map(num => +num * +num)
    );

  }


  // setSubjectData(val: number) {
  //   this.subjectData.next(val);
  // }

  // setBehaviouralSubjectData(val: number) {
  //   this.behaviouralSubjectData.next(val);
  // }


  setReplaySubjectData(val: number) {
    this.replaySubjectData.next(val);
  }

}
