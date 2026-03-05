import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services">
      <div class="section-inner">
        <div class="section-eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Services</span>
        </div>
        <div class="services-head">
          <div>
            <h2 class="section-title">What I Build</h2>
            <p class="section-sub">From quick websites to custom software — all with fair pricing and zero hidden charges.</p>
          </div>
        </div>

        <div class="services-grid">
          <div class="svc-card" *ngFor="let service of dataService.services">
            <div class="svc-num">{{ service.number }}</div>
            <span class="svc-icon">{{ service.icon }}</span>
            <div class="svc-name">{{ service.name }}</div>
            <p class="svc-desc">{{ service.description }}</p>
            <div class="svc-price">{{ service.price }}</div>
            <div class="svc-arrow">↗</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: 100px 5%;
    }

    .section-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-eyebrow {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }

    .eyebrow-line {
      width: 32px;
      height: 1px;
      background: var(--accent);
    }

    .eyebrow-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--accent);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-weight: 500;
    }

    .section-title {
      font-size: clamp(28px, 4vw, 46px);
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--white);
      margin-bottom: 14px;
      font-family: 'Clash Display', sans-serif;
    }

    .section-sub {
      font-size: 16px;
      color: var(--text2);
      max-width: 520px;
      line-height: 1.8;
    }

    #services {
      background: var(--bg2);
    }

    .services-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 52px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
    }

    .svc-card {
      background: var(--bg2);
      padding: 36px 32px;
      transition: all 0.25s;
      position: relative;
      overflow: hidden;
    }

    .svc-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent-dim);
      opacity: 0;
      transition: opacity 0.25s;
    }

    .svc-card:hover::before {
      opacity: 1;
    }

    .svc-card:hover {
      transform: translateY(-2px);
    }

    .svc-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text3);
      letter-spacing: 0.15em;
      margin-bottom: 20px;
    }

    .svc-icon {
      font-size: 32px;
      margin-bottom: 18px;
      display: block;
    }

    .svc-name {
      font-size: 20px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 10px;
      font-family: 'Clash Display', sans-serif;
      letter-spacing: -0.01em;
      position: relative;
      z-index: 1;
    }

    .svc-desc {
      font-size: 14px;
      color: var(--text2);
      line-height: 1.7;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }

    .svc-price {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: var(--accent);
      font-weight: 600;
      position: relative;
      z-index: 1;
    }

    .svc-arrow {
      position: absolute;
      bottom: 32px;
      right: 32px;
      width: 36px;
      height: 36px;
      border: 1px solid var(--border2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: var(--text3);
      transition: all 0.2s;
    }

    .svc-card:hover .svc-arrow {
      border-color: var(--accent);
      color: var(--accent);
      transform: rotate(45deg);
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  dataService = inject(PortfolioDataService);
}
