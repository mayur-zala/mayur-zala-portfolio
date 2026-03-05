import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-glow"></div>
        <div class="hero-glow2"></div>
      </div>

      <div class="hero-inner">
        <div class="hero-left">
          <div class="hero-available">
            <div class="available-dot"></div>
            <span class="available-text">Available for freelance</span>
          </div>

          <div class="hero-greeting">Hello! 👋</div>
          <h1 class="hero-name">I'm <span class="accent">Mayur Zala</span></h1>
          <p class="hero-role">
            <strong>Web & Software Developer</strong> building digital solutions for
            <em>Gujarat's local businesses</em>
          </p>
          <p class="hero-desc">
            I transform local businesses into digital powerhouses. From <em>3-day websites</em> to
            <em>custom software solutions</em>, I deliver fast, fair, and with zero hidden charges.
          </p>

          <div class="hero-actions">
            <a href="#contact" class="btn-primary">
              <span>Let's Build Together</span>
              <span>→</span>
            </a>
            <a href="#work" class="btn-secondary">
              <span>See My Work</span>
              <span>↗</span>
            </a>
          </div>

          <div class="hero-stats">
            <div class="hstat">
              <div class="hstat-val">50<span>+</span></div>
              <div class="hstat-lbl">PROJECTS</div>
            </div>
            <div class="hstat">
              <div class="hstat-val">3<span>K+</span></div>
              <div class="hstat-lbl">HAPPY CLIENTS</div>
            </div>
            <div class="hstat">
              <div class="hstat-val">24/7</div>
              <div class="hstat-lbl">SUPPORT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 100px 5% 60px;
      position: relative;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .hero-grid {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(var(--border) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 60px 60px;
      opacity: 0.4;
    }

    .hero-glow {
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,229,160,0.12) 0%, transparent 70%);
      top: -100px;
      right: -100px;
      animation: float 8s ease-in-out infinite;
    }

    .hero-glow2 {
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,184,122,0.08) 0%, transparent 70%);
      bottom: 0;
      left: 10%;
      animation: float 10s ease-in-out infinite reverse;
    }

    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-available {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--accent-dim);
      border: 1px solid rgba(0,229,160,0.2);
      border-radius: 30px;
      padding: 6px 16px;
      margin-bottom: 28px;
    }

    .available-dot {
      width: 7px;
      height: 7px;
      background: var(--accent);
      border-radius: 50%;
      animation: blink 2s ease infinite;
    }

    .available-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--accent);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 500;
    }

    .hero-greeting {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: var(--text2);
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }

    .hero-name {
      font-size: clamp(48px, 7vw, 84px);
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.03em;
      margin-bottom: 16px;
      color: var(--white);
      font-family: 'Clash Display', sans-serif;
    }

    .hero-name .accent {
      color: var(--accent);
    }

    .hero-role {
      font-size: clamp(18px, 3vw, 28px);
      color: var(--text2);
      font-weight: 300;
      margin-bottom: 28px;
      line-height: 1.3;
    }

    .hero-role strong {
      color: var(--text);
      font-weight: 500;
    }

    .hero-desc {
      font-size: 16px;
      color: var(--text2);
      line-height: 1.8;
      max-width: 520px;
      margin-bottom: 40px;
    }

    .hero-desc em {
      color: var(--accent);
      font-style: normal;
      font-weight: 500;
    }

    .hero-actions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 52px;
    }

    .btn-primary,
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 30px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: 0.04em;
      transition: all 0.2s;
      font-family: 'Satoshi', sans-serif;
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--accent);
      color: var(--bg);
    }

    .btn-primary:hover {
      background: var(--accent2);
      transform: translateY(-2px);
      box-shadow: 0 12px 30px var(--accent-glow);
    }

    .btn-secondary {
      background: transparent;
      color: var(--text);
      border: 1px solid var(--border2);
    }

    .btn-secondary:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-2px);
    }

    .hero-stats {
      display: flex;
      gap: 32px;
      padding-top: 32px;
      border-top: 1px solid var(--border);
    }

    .hstat {
    }

    .hstat-val {
      font-size: 28px;
      font-weight: 700;
      color: var(--white);
      font-family: 'Clash Display', sans-serif;
      letter-spacing: -0.02em;
    }

    .hstat-val span {
      color: var(--accent);
    }

    .hstat-lbl {
      font-size: 12px;
      color: var(--text3);
      margin-top: 2px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.06em;
    }

    /* Hero Card */
    .hero-card {
      background: var(--surface);
      border: 1px solid var(--border2);
      border-radius: 20px;
      padding: 0;
      overflow: hidden;
      position: relative;
    }

    .hero-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
    }

    .hcard-top {
      padding: 24px;
      border-bottom: 1px solid var(--border);
    }

    .hcard-user {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 20px;
    }

    .hcard-avatar {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--accent), #00b87a);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 700;
      color: var(--bg);
      font-family: 'Clash Display', sans-serif;
      flex-shrink: 0;
    }

    .hcard-name {
      font-weight: 700;
      color: var(--white);
      font-size: 16px;
    }

    .hcard-handle {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text3);
      margin-top: 2px;
    }

    .hcard-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(0,229,160,0.1);
      border: 1px solid rgba(0,229,160,0.2);
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 11px;
      color: var(--accent);
      font-family: 'JetBrains Mono', monospace;
      margin-top: 8px;
    }

    .skill-bars {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .skill-item {
    }

    .skill-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      font-size: 12px;
    }

    .skill-name {
      color: var(--text2);
    }

    .skill-pct {
      color: var(--accent);
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
    }

    .skill-track {
      height: 3px;
      background: var(--border2);
      border-radius: 2px;
      overflow: hidden;
    }

    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      border-radius: 2px;
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hcard-bottom {
      padding: 18px 24px;
      background: var(--bg3);
    }

    .hcard-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .htag {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 5px 11px;
      font-size: 11px;
      color: var(--text2);
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.2s;
    }

    .htag:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    @media (max-width: 1024px) {
      .hero-inner {
        grid-template-columns: 1fr;
      }

      .hero-card {
        max-width: 100%;
      }
    }
  `]
})
export class HeroComponent {}
