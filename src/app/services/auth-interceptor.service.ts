import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log("interceptor")
      const authToken = this.tokenStorage.getToken();
      req = req.clone({
          setHeaders: {
              Authorization: "Bearer " + authToken
          }
      });
      return next.handle(req);
  }
}

