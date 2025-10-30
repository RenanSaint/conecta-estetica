import { Component, inject, signal, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, RouterLink, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bellitudo');
  @ViewChild('drawer') drawer: MatSidenav = new MatSidenav;

  private router = inject(Router)

  validRoutes = routes.filter((r) => r.data?.['label']).map((r) => ({ path: r.path!, label: r.data!['label'], icon: r.data!['icon'] }));
  toggleNav = signal(() => { this.drawer.toggle() });
  currentRoute = signal<string>(this.router.url);

  constructor() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => this.currentRoute.set(event.urlAfterRedirects));
  }
}
