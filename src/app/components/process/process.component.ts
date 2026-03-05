import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process">
      <div class="section-inner">
        <div class="section-eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">How It Works</span>
        </div>
        <h2 class="section-title">From WhatsApp to<br/>Live Website in 5 Days</h2>

        <div class="process-steps">
          <div class="pstep" *ngFor="let step of dataService.processSteps; let isLast = last">
            <div class="pstep-num">{{ step.number }}</div>
            <span class="pstep-icon">{{ step.icon }}</span>
            <div class="pstep-title">{{ step.title }}</div>
            <p class="pstep-text">{{ step.text }}</p>
            <div class="pstep-connector" *ngIf="!isLast">→</div>
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

    #process {
      background: var(--bg);
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .pstep {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 28px 24px;
      position: relative;
      transition: all 0.25s;
    }

    .pstep:hover {
      border-color: rgba(0, 229, 160, 0.3);
      transform: translateY(-3px);
    }

    .pstep-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text3);
      letter-spacing: 0.15em;
      margin-bottom: 16px;
    }

    .pstep-icon {
      font-size: 28px;
      margin-bottom: 14px;
      display: block;
    }

    .pstep-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 8px;
      font-family: 'Clash Display', sans-serif;
    }

    .pstep-text {
      font-size: 13px;
      color: var(--text2);
      line-height: 1.7;
    }

    .pstep-connector {
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text3);
      font-size: 12px;
      z-index: 1;
    }

    @media (max-width: 1024px) {
      .process-steps {
        grid-template-columns: repeat(2, 1fr);
      }

      .pstep-connector {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .process-steps {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProcessComponent {
  dataService = inject(PortfolioDataService);
}
