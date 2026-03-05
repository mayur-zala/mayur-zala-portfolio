import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="section-inner">
        <div class="section-eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">About Me</span>
        </div>

        <div class="about-grid">
          <div class="about-left">
            <h2 class="section-title">The Developer<br/>Behind the Work</h2>
            <p class="about-text">
              I'm <strong>Mayur Zala</strong>, a web and software developer from <strong>Nadiad, Gujarat</strong>.
              I started building websites because I saw hundreds of brilliant local businesses invisible online
              — clinics, coaching institutes, traders — all losing customers to competitors who simply had a website.
            </p>
            <p class="about-text">
              I bridge that gap. I work across <strong>Nadiad, Anand and Vadodara</strong> — in person where needed,
              remote where efficient. I communicate in <strong>Gujarati, Hindi and English</strong>, and I price fairly
              with zero hidden charges.
            </p>
            <p class="about-text">
              My goal is to grow <strong>mayurzala.com</strong> from a local web agency into a full software solutions
              brand — building products that help Gujarat's businesses scale.
            </p>

            <div class="about-highlights">
              <div class="highlight" *ngFor="let highlight of dataService.highlights">
                <div class="highlight-icon">{{ highlight.icon }}</div>
                <div class="highlight-title">{{ highlight.title }}</div>
                <div class="highlight-text">{{ highlight.text }}</div>
              </div>
            </div>
          </div>

          <div class="about-right">
            <div class="tech-label">Tech Stack</div>
            <div class="tech-grid">
              <div class="tech-item" *ngFor="let tech of dataService.techStack">
                <div class="tech-icon">{{ tech.icon }}</div>
                <div class="tech-name">{{ tech.name }}</div>
              </div>
            </div>

            <div class="tech-label" style="margin-top: 8px">Journey</div>
            <div class="exp-timeline">
              <div class="exp-item" *ngFor="let exp of dataService.experience">
                <div class="exp-dot"></div>
                <div class="exp-content">
                  <div class="exp-year">{{ exp.year }}</div>
                  <div class="exp-role">{{ exp.role }}</div>
                  <div class="exp-where">{{ exp.where }}</div>
                </div>
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

    #about {
      background: var(--bg2);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: flex-start;
      margin-top: 52px;
    }

    .about-text {
      font-size: 16px;
      color: var(--text2);
      line-height: 1.9;
      margin-bottom: 20px;
    }

    .about-text strong {
      color: var(--text);
      font-weight: 600;
    }

    .about-highlights {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 32px;
    }

    .highlight {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 18px;
      transition: all 0.2s;
    }

    .highlight:hover {
      border-color: rgba(0, 229, 160, 0.3);
    }

    .highlight-icon {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .highlight-title {
      font-size: 14px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 4px;
    }

    .highlight-text {
      font-size: 12px;
      color: var(--text3);
      line-height: 1.6;
    }

    .tech-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text3);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 32px;
    }

    .tech-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 14px 12px;
      text-align: center;
      transition: all 0.2s;
      cursor: default;
    }

    .tech-item:hover {
      border-color: rgba(0, 229, 160, 0.3);
      background: var(--surface2);
    }

    .tech-icon {
      font-size: 22px;
      margin-bottom: 8px;
    }

    .tech-name {
      font-size: 12px;
      color: var(--text2);
      font-family: 'JetBrains Mono', monospace;
    }

    .exp-timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .exp-item {
      display: flex;
      gap: 18px;
      padding-bottom: 24px;
      position: relative;
    }

    .exp-item:not(:last-child)::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 16px;
      bottom: 0;
      width: 1px;
      background: var(--border);
    }

    .exp-dot {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid var(--accent);
      background: var(--bg2);
      flex-shrink: 0;
      margin-top: 3px;
      position: relative;
      z-index: 1;
    }

    .exp-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text3);
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }

    .exp-role {
      font-size: 15px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 3px;
    }

    .exp-where {
      font-size: 13px;
      color: var(--accent);
    }

    @media (max-width: 1024px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .tech-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 768px) {
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .about-highlights {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  dataService = inject(PortfolioDataService);
}
