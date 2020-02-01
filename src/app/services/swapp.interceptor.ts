import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MovieService } from './movie.service';

@Injectable()
export class swappInterceptor implements HttpInterceptor {

    constructor(private movieService: MovieService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const httpRequest = new HttpRequest(<any>request.method, `${request.url}`);
        request = Object.assign(request, httpRequest);

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                this.movieService.sendError(err);
                return new Observable<any>();
            }));

    }
}