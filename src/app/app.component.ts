import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard-frontend';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authService.scheduleTokenRefresh();
      this.authService.scheduleTokenAutoRefresh();
    }
  }
}
