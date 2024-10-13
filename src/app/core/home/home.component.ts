import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public saludo = '';
  public routes = routes;
  public today = new Date();
  public currentHour = this.today.getHours();
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.checkTime(this.currentHour);
  }

  ngOnInit(): void {
    this.checkTime(this.currentHour);
    const token = this.auth.getToken();
  }

  checkTime(i: number) {
    if (i >= 0 && i < 12) {
      this.saludo = 'Buenos días';
    }
    if (i >= 12 && i < 19) {
      this.saludo = 'Buenas tardes';
    }
    if (i >= 19) {
      this.saludo = 'Buenas noches';
    }
  }

  logout() {
    this.auth.logout(); // Llama al método de logout del AuthService
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
