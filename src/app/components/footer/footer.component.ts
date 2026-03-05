import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-inner">
        <div class="footer-logo">Mayur Zala</div>
        <div class="footer-copy">© 2026 Mayur Zala · Web & Software Developer · Nadiad, Gujarat</div>
        <div class="footer-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--bg);
      border-top: 1px solid var(--border);
      padding: 32px 5%;
    }

    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .footer-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: var(--accent);
    }

    .footer-copy {
      font-size: 13px;
      color: var(--text3);
    }

    .footer-links {
      display: flex;
      gap: 24px;
    }

    .footer-links a {
      color: var(--text3);
      text-decoration: none;
      font-size: 13px;
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: var(--accent);
    }

    @media (max-width: 768px) {
      .footer-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
