import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private posts$!: Observable<any>;

  constructor(private http: HttpClient) { }

  getAllPostsWithShareReplay() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    if (!this.posts$) {
      this.posts$ = this.http.get(url).pipe(shareReplay(1));
    }
    return this.posts$;
  }

  getAllPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get(url);
  }

}
