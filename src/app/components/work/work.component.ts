import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="work">
      <div class="section-inner">
        <div class="section-eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Portfolio</span>
        </div>
        <h2 class="section-title">Recent Projects</h2>
        <p class="section-sub">Demo websites built to showcase capability across different business types in Gujarat.</p>

        <div class="work-grid">
          <div class="work-card" *ngFor="let work of dataService.workItems">
            <div class="work-thumb" [style.background]="work.gradient">
              <span style="position: relative; z-index: 1; font-size: 64px;">{{ work.icon }}</span>
              <div class="work-thumb-overlay"></div>
              <span class="work-thumb-label">{{ work.label }}</span>
              <a href="#" class="work-link">↗</a>
            </div>
            <div class="work-body">
              <div class="work-type">{{ work.type }} · {{ work.location }}</div>
              <div class="work-name">{{ work.name }}</div>
              <p class="work-desc">{{ work.description }}</p>
              <div class="work-tags">
                <span class="wtag" *ngFor="let tag of work.tags">{{ tag }}</span>
              </div>
            </div>
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
      margin-bottom: 52px;
    }

    #work {
      background: var(--bg);
    }

    .work-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .work-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.25s;
      position: relative;
    }

    .work-card:hover {
      border-color: rgba(0, 229, 160, 0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }

    .work-thumb {
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .work-thumb-overlay {
      position: absolute;
      inset: 0;
      background: var(--overlay);
      z-index: 1;
    }

    .work-thumb-label {
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 2;
      background: var(--accent);
      color: var(--bg);
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.08em;
    }

    .work-body {
      padding: 24px;
    }

    .work-type {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--accent);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .work-name {
      font-size: 20px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 8px;
      font-family: 'Clash Display', sans-serif;
    }

    .work-desc {
      font-size: 14px;
      color: var(--text2);
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .work-tags {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
    }

    .wtag {
      background: var(--bg3);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 4px 10px;
      font-size: 11px;
      color: var(--text2);
      font-family: 'JetBrains Mono', monospace;
    }

    .work-link {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      width: 36px;
      height: 36px;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid var(--border2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text2);
      text-decoration: none;
      font-size: 14px;
      transition: all 0.2s;
      opacity: 0;
    }

    .work-card:hover .work-link {
      opacity: 1;
      color: var(--accent);
      border-color: var(--accent);
    }

    @media (max-width: 1024px) {
      .work-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .work-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class WorkComponent {
  dataService = inject(PortfolioDataService);
}
