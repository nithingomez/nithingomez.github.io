import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, shareReplay, tap } from 'rxjs/operators';

type singlePost = {
  userId: number,
  id: number,
  title: string,
  body: string
};
@Injectable({
  providedIn: 'root'
})

export class CommonService {
  private posts$!: Observable<any>;
  private readonly _getContent = new Map<string, Observable<any>>();


  constructor(private readonly http: HttpClient) { }

  getAllPostsWithShareReplay() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    if (!this.posts$) {
      this.posts$ = this.http.get(url).pipe(shareReplay(1));
    }
    return this.posts$;
  }

  getAllPostsByIdWithShareReplay(id: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const cacheKey = `${id}|${url}`;
    if (!this._getContent.get(cacheKey)) {
      this._getContent.set(cacheKey, this.http.get(url).pipe(shareReplay(1)));
    }
    return this._getContent.get(cacheKey);
  }

  getAllPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get(url);
  }

  resetGetByIdCache() {
    this._getContent.clear();
  }

}
