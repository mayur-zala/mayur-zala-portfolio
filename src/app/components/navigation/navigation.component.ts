import { Component, inject, signal, effect, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled()">
      <div class="nav-inner">
        <a href="#" class="nav-logo">Mayur Zala</a>
        <ul class="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <button class="theme-toggle" (click)="toggleTheme()" [title]="themeService.isDarkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <span *ngIf="themeService.isDarkMode()">☀️</span>
            <span *ngIf="!themeService.isDarkMode()">🌙</span>
          </button>
          <a href="#contact" class="nav-cta">Get in touch</a>
        </div>
        <div class="hamburger" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 0 5%;
      transition: all 0.3s;
      background: transparent;
    }

    nav.scrolled {
      background: var(--bg);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }

    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      color: var(--accent);
      text-decoration: none;
      letter-spacing: 0.05em;
    }

    .nav-links {
      display: flex;
      gap: 36px;
      list-style: none;
    }

    .nav-links a {
      color: var(--text2);
      text-decoration: none;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      transition: color 0.2s;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--accent);
      transition: width 0.2s;
    }

    .nav-links a:hover {
      color: var(--accent);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .theme-toggle {
      background: transparent;
      border: 1px solid var(--border2);
      color: var(--text2);
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .theme-toggle:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .nav-cta {
      background: transparent;
      border: 1px solid var(--accent);
      color: var(--accent);
      padding: 9px 22px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      transition: all 0.2s;
      font-family: 'JetBrains Mono', monospace;
    }

    .nav-cta:hover {
      background: var(--accent);
      color: var(--bg);
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      padding: 4px;
    }

    .hamburger span {
      width: 24px;
      height: 1.5px;
      background: var(--text);
      transition: all 0.3s;
      display: block;
    }

    @media (max-width: 768px) {
      .nav-links,
      .nav-cta {
        display: none;
      }

      .hamburger {
        display: flex;
      }

      .nav-inner {
        gap: 12px;
      }
    }
  `]
})
export class NavigationComponent {
  themeService = inject(ThemeService);
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(): void {
    // Mobile menu toggle - implement as needed
  }
}
