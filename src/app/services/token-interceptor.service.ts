import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements  HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // add auth header with jwt if account is logged in and request is to the api url
    if (
      req.url.startsWith('https://demo.codingbirdsonline.com/country-state-city-dropdown-api/index.php')
    ) {
      return next.handle(req);
    }
    else{
      const tokenizedReq = req.clone({
        setHeaders:{
          "x-api-key":`${localStorage.getItem(
           environment.token
         )}`
        }
  
       })
       return next.handle(tokenizedReq)
    }
    

   }
}
