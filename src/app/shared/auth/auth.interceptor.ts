import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Check if the error is a 401 Unauthorized
        if (
          error.status === 401 &&
          !req.url.includes('/refresh-token') &&
          token
        ) {
          // If we are not already refreshing a token
          if (!this.isRefreshing) {
            this.isRefreshing = true;

            // Try to refresh the token
            return this.authService.refreshToken().pipe(
              switchMap((response) => {
                this.isRefreshing = false;
                const newToken = response.token;
                const expiresIn = response.expires_in;
                this.authService.saveToken(newToken, expiresIn); // Guardar el nuevo token
                const clonedReq = req.clone({
                  setHeaders: { Authorization: `Bearer ${newToken}` },
                });
                return next.handle(clonedReq);
              }),
              catchError((refreshError) => {
                this.isRefreshing = false;
                this.authService.logout();
                this.router.navigate(['/login']);
                return throwError(refreshError);
              }),
            );
          } else {
            // If the token is already being refreshed, avoid the request loop
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        } else if (error.status === 403) {
          // Forbidden - usually means the user doesn't have permission
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        return throwError(error);
      }),
    );
  }
}
