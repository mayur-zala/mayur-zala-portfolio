import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(this.loadTheme());

  constructor() {
    this.applyTheme(this.isDarkMode());
  }

  toggleTheme(): void {
    this.isDarkMode.update(current => !current);
    this.applyTheme(this.isDarkMode());
    this.saveTheme(this.isDarkMode());
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  private saveTheme(isDark: boolean): void {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  private loadTheme(): boolean {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Detect system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark mode
  }
}
