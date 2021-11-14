import { Component, OnInit } from '@angular/core';
import { memoize } from 'lodash';
import { LoadingService } from 'src/app/loading.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  inputNum = 1;
  cache: any = {};


  fibonacci = memoize((num: number): number => {
    if (num === 1 || num === 2) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  });

  fibonacciCustom = this.customMemoize((num: number): number => {
    if (num === 1 || num === 2) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  });



  constructor(protected loader: LoadingService) { }

  ngOnInit(): void {
  }


  findFib(num: number): number {
    if (num === 1 || num === 2) return 1;
    return this.findFib(num - 1) + this.findFib(num - 2);
  }

  customMemoize(fn: any) {
    let cache: any = {};
    return (...args: any[]) => {
      let n = args[0];  // just taking one argument here
      if (n in cache) {
        console.log('Fetching from cache');
        return cache[n];
      }
      else {
        console.log('Calculating result');
        let result: any = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }



  fibMemo(num: number) {
    alert('Answer ' + this.fibonacci(num));
  }

  fibCustomMemo(num: number) {
    const memoizedFib = this.customMemoize(this.fibonacciCustom);
    alert('Answer ' + memoizedFib(num));
  }

  fib(num: number) {
    alert('Answer ' + this.findFib(num));
  }

  complexFn(num1: number) {
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
      alert(num1 * num1);
    }, 2000);
  }


  complexFnMemo(num1: number) {
    if (this.cache[num1]) {
      alert(this.cache[num1]);
    } else {
      setTimeout(() => {
        const result = num1 * num1;
        alert(result);
        this.cache[num1] = result;
      }, 2000);
    }
  }
}







