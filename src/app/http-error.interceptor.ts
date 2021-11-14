import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          alert('Object Created')
        } else if (event instanceof HttpErrorResponse) {
          alert('Error ' + event.message);
        } else {
          console.log('In HTTP Interceptor: ' + JSON.stringify(event));
          this.loader.hide();
        }
      })
    );
  }
}
