import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpRequest, HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, takeUntil } from 'rxjs/operators';
import { ActivationEnd, Router } from '@angular/router';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(tap(() => { },
        (error: HttpErrorResponse) => {
          // Server error
          switch (error.status) {
            case 500:

              break;
            case 400:
              // notifier.showError(message);
              break;
          }
        })
      );
  }
}
