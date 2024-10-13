import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Route {
  url: string;
  // Add other properties if necessary
}

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  constructor(public router: Router) {}
}
