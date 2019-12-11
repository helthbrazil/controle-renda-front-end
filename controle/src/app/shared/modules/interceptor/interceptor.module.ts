
import { Injectable, NgModule, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../services/progress-bar.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private router: Router, private progressBarService: ProgressBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progressBarService.start();
    const dupReq = req.clone({
      headers: req.headers.set('Authorization', 'token')
    });
    return next.handle(dupReq).pipe(catchError((error, caught) => {
      this.progressBarService.complete();

      if (error.status) {
        if (error.status === 401) {

        } else if (error.status === 403) {
          this.router.navigate(['/unauthorized']);
        }
      }
      return throwError(error);
    }) as any);

  }
}


@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    }
  ]
})

export class InterceptorModule { }
