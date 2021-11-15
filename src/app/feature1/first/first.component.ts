import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

import { Injector } from "@angular/core";


import { uniq, isEqual, isEmpty, sortBy } from 'lodash';
import * as moment from 'moment';
// import * as _ from 'lodash';
import { catchError, map, Observable, Subscription, throwError, timer } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  providers: [DatePipe],
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  posts: any = [];
  title = 'Share replay and async pipe - Lodash & Moment Lib';
  num = 0;
  subs!: Subscription;
  singlePost!: any;

  constructor(protected commonService: CommonService,
    protected datePipe: DatePipe,
    protected injector: Injector) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.triggerTimerObservable();
    this.testLodash();
    this.dateTest();
  }

  getAllPosts() {
    //Without async Pipe
    // this.commonService.getAllPosts().subscribe((data) => {
    //   console.log('Data from get All Posts ' + JSON.stringify(data));
    //   this.posts = data;
    // })
    // })
    this.posts = this.commonService.getAllPosts()
    // .pipe(catchError((err: any) => {
    //     alert(err.name + ' ' + err.message);
    //     return throwError(() => err);
    //   }));
  }



  getAllPostsWithShareReplay() {
    this.posts = this.commonService.getAllPostsWithShareReplay();
  }

  getAllPostsByIdWithShareReplay(id: number) {
    this.singlePost = this.commonService.getAllPostsByIdWithShareReplay(id);
  }

  resetGetByIdCache() {
    this.commonService.resetGetByIdCache();
  }

  getfilteredResult() {
    this.posts = this.posts.pipe(map((row: any) => row.filter((item: { userId: number; }) => item.userId === 1)));
  }

  triggerTimerObservable() {
    let sub = timer(0, 1000).subscribe((num) => {
      this.num = num;
      // if (this.num === 5) {
      //   sub.unsubscribe();
      // }
    });
  }

  testLodash() {

    // isEqual

    console.log(` \n  Using Lodash isEqual \n `);

    const objx = {
      name: 'Ram',
      age: 20,
      location: {
        city: 'NY',
        state: 'NY'
      }
    };

    const objy = {
      name: 'Ram',
      age: 20,
      location: {
        city: 'NY',
        state: 'NY'
      }
    };

    console.log(`Check if two objects are equal ` + isEqual(objx, objy)); // true

    // sortBy
    console.log(` \n  Using Lodash sortBy \n `);

    const users = [
      { 'user': 'fred', 'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'barney', 'age': 34 }
    ];

    //sort users by age
    console.log(`sorted age ` + sortBy(users, [function (user) { return user.age }]));



    // isEmpty

    console.log(` \n  Using Lodash isEmpty \n `);

    const obj1 = { name: 'David' };
    console.log(`{ name: 'David' } ` + isEmpty(obj1)); // false

    const obj2 = {};
    console.log(`{} ` + isEmpty(obj2)); // true

    const array1: any[] = [];
    console.log(`[] ` + isEmpty(array1)); // true

    const array2 = [2, 3];
    console.log(`[2, 3] ` + isEmpty(array2)); // false

    const nullValue = null;
    console.log(`null ` + isEmpty(nullValue)); // true

    const undefinedValue = undefined;
    console.log(`undefined ` + isEmpty(undefinedValue)); // true

    // UNIQ

    console.log(` \n  Using Lodash uniq to extract unique values from array \n `);


    let items = [16, 15, 18, 16, 19, 15, 15, 5, 16];
    items = uniq(items);

    // items = _.uniq(items);

    console.log('Lodash uniq test: unique items ' + items);

  }

  dateTest() {
    let todayDate = new Date();
    console.log('new Date() ' + todayDate);

    console.log(` \n  Using Angular Date Pipe to Format Date \n `);

    let datePipeTodayDate = this.datePipe.transform(new Date(), 'dd-MM-yy');

    console.log('date pipe new Date() dd-MM-yy ' + datePipeTodayDate);

    // Using Moment Library to Format Date
    console.log(` \n  Using Moment Library to Format Date \n `);

    console.log(`moment().format('DD/MMM/YY') ` + moment().format('DD/MMM/YY')); // 04/Jul/20
    console.log(`moment().format('DD/MM/YY') ` + moment().format('DD/MM/YY')); // 04/07/20
    console.log(`moment().format('DD-MM-YY') ` + moment().format('DD-MM-YY')); // 04-07-20
    console.log(`moment().format('MM-DD-YYYY') ` + moment().format('MM-DD-YYYY')); // 07-04-2020
    console.log(`moment().format('YYYY-MM-DD') ` + moment().format('YYYY-MM-DD')); // 2020-07-04
    console.log(`moment().format('M') ` + moment().format('M')); // 7
    console.log(`moment().format('DDD') ` + moment().format('DDD')); // 186

    // Subtract time from date
    console.log(`moment().subtract(1, 'days').format('MM/DD/YYYY') ` + moment().subtract(1, 'days').format('MM/DD/YYYY')); // 07/03/2020
    console.log(`moment().subtract(1, 'months').format('MM/DD/YYYY') ` + moment().subtract(1, 'months').format('MM/DD/YYYY')); // 06/04/2020

    // Add time to date
    console.log(`moment().add(3, 'years').format('YYYY') ` + moment().add(3, 'years').format('YYYY')); // 2023
    console.log(`moment().add(48, 'hours').format('MM/DD/YYYY') ` + moment().add(48, 'hours').format('MM/DD/YYYY')); // 07/06/2020

    // Check if date is after some other date
    console.log(`moment('2020-07-01').isAfter('2019-06-01') ` + moment('2020-07-01').isAfter('2019-06-01')); // true

    // Check if date is before some other date
    console.log(`moment('2020-07-01').isBefore('2019-06-01') ` + moment('2020-07-01').isBefore('2019-06-01')); // false

    // Check if dates are equal
    console.log(`moment('2015-09-10').isSame('2015-09-10') ` + moment('2015-09-10').isSame('2015-09-10')); // true
    console.log(`moment('2018-03-10').isSame('2018-03-11') ` + moment('2018-03-10').isSame('2018-03-11')); // false

    // Display number of days in month
    console.log(`moment('2020-07').daysInMonth() ` + moment('2020-07').daysInMonth()); // 31
    console.log(`moment('2020-06').daysInMonth() ` + moment('2020-06').daysInMonth()); // 30

    // Current day number
    console.log(`moment('2020-07-10').day() ` + moment('2020-07-10').day()); // 5

    // Days difference
    console.log(`moment('2020-07-10').diff('2020-07-05', 'days') ` + moment('2020-07-10').diff('2020-07-05', 'days')); // 5

    // 12h time format
    console.log(`moment().hours(14).minutes(23).format('hh:mm a') ` + moment().hours(14).minutes(23).format('hh:mm a')); // 02:23 pm

  }


}
