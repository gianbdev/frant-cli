import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';

interface LoginResponse {
  //token: string;
  //expires_in: number;
  data: {
    token: string;
    expires_in: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiURL}`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          console.log(response); // Verifica la respuesta de la API
          const token = response.data.token;
          const expiresIn = response.data.expires_in;
          const expiresAt = Date.now() + expiresIn * 1000;
          this.saveToken(token, expiresIn);
        }),
      );
  }

  refreshToken(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/refresh-token`).pipe(
      tap((response) => {
        if (response.token && response.expires_in) {
          this.saveToken(response.token, response.expires_in);
        } else {
          console.error(
            'Respuesta del servidor no contiene token o tiempo de expiración',
          );
        }
      }),
      catchError((error) => {
        console.error('Error al refrescar el token', error);
        this.logout(); // Opcional: Cerrar sesión si el token no se puede refrescar
        return throwError(() => new Error('Error al refrescar el token'));
      }),
    );
  }

  logout(): void {
    this.http.get(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error during logout:', error);
        // O puedes optar por realizar la limpieza y redirección incluso si falla la solicitud
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        this.router.navigate(['/login']);
      },
    });
  }

  /*
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login']);
  }*/

  isLoggedIn(): boolean {
    //return !!localStorage.getItem('token');
    const token = localStorage.getItem('token');
    const expiresAt = localStorage.getItem('expires_at');
    return !!token && Date.now() < parseInt(expiresAt || '0', 10);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  public saveToken(token: string, expiresIn: number): void {
    const expiresAt = Date.now() + expiresIn * 1000; // Calcula el tiempo de expiración
    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', expiresAt.toString());
    //console.log('Token guardado:', token);
  }

  scheduleTokenRefresh(): void {
    const expiresAt = localStorage.getItem('expires_at');
    if (expiresAt) {
      const timeout = parseInt(expiresAt, 10) - Date.now() - 10 * 60 * 1000; // Renueva 10 minutos antes de expirar
      if (timeout > 0) {
        setTimeout(() => {
          this.refreshToken().subscribe();
        }, timeout);
      } else {
        this.refreshToken().subscribe();
      }
    }
  }

  scheduleTokenAutoRefresh(): void {
    setInterval(
      () => {
        this.refreshToken().subscribe();
      },
      60 * 60 * 1000,
    ); // Renueva cada 1 hora
  }
}
