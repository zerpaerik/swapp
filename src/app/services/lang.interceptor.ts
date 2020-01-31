import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
 
import { Observable } from 'rxjs';
 
@Injectable()
export class langInterceptor implements HttpInterceptor {
    
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        const httpRequest = new HttpRequest(<any>request.method, `${request.url}`);
        request = Object.assign(request, httpRequest);

        return next.handle(request)
    
    }
}