import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    ServicesComponent,
    WorkComponent,
    AboutComponent,
    ProcessComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navigation></app-navigation>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-work></app-work>
    <app-about></app-about>
    <app-process></app-process>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  themeService = inject(ThemeService);
}
