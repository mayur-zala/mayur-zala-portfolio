import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact">
      <div class="section-inner">
        <div class="section-eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Get In Touch</span>
        </div>
        <h2 class="section-title">Ready to Build<br/>Something Great?</h2>

        <div class="contact-grid">
          <div class="contact-info">
            <p class="contact-intro">Message me on WhatsApp for the fastest response. I reply within 2 hours during business hours. Available across Nadiad, Anand and Vadodara.</p>
            <div class="contact-links">
              <a href="https://wa.me/91XXXXXXXXXX" class="contact-link">
                <div class="cl-icon">💬</div>
                <div><div class="cl-label">WhatsApp (Fastest)</div><div class="cl-val">+91 XXXXX XXXXX</div></div>
              </a>
              <a href="mailto:hello@mayurzala.com" class="contact-link">
                <div class="cl-icon">📧</div>
                <div><div class="cl-label">Email</div><div class="cl-val">hello@mayurzala.com</div></div>
              </a>
              <a href="https://mayurzala.com" class="contact-link">
                <div class="cl-icon">🌐</div>
                <div><div class="cl-label">Website</div><div class="cl-val">mayurzala.com</div></div>
              </a>
              <div class="contact-link" style="cursor: default">
                <div class="cl-icon">📍</div>
                <div><div class="cl-label">Serving</div><div class="cl-val">Nadiad · Anand · Vadodara</div></div>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <div class="form-title">Send a Message</div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Your Name</label>
                <input class="form-input" type="text" placeholder="Ramesh Shah"/>
              </div>
              <div class="form-group">
                <label class="form-label">WhatsApp / Phone</label>
                <input class="form-input" type="tel" placeholder="+91 XXXXX XXXXX"/>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Business Name & City</label>
              <input class="form-input" type="text" placeholder="Shree Medical · Nadiad"/>
            </div>
            <div class="form-group">
              <label class="form-label">What do you need?</label>
              <textarea class="form-input" placeholder="e.g. Website for my dental clinic in Nadiad, need 5 pages with appointment booking..."></textarea>
            </div>
            <button class="form-submit">Send Message →</button>
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

    #contact {
      background: var(--bg2);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      margin-top: 52px;
      align-items: start;
    }

    .contact-intro {
      font-size: 16px;
      color: var(--text2);
      line-height: 1.8;
      margin-bottom: 36px;
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 16px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px 20px;
      text-decoration: none;
      transition: all 0.2s;
    }

    .contact-link:hover {
      border-color: rgba(0, 229, 160, 0.3);
      transform: translateX(4px);
    }

    .cl-icon {
      width: 40px;
      height: 40px;
      background: var(--accent-dim);
      border: 1px solid rgba(0, 229, 160, 0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }

    .cl-label {
      font-size: 11px;
      color: var(--text3);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .cl-val {
      font-size: 14px;
      color: var(--text);
      font-weight: 600;
    }

    .contact-form {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 36px;
      position: relative;
      overflow: hidden;
    }

    .contact-form::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
    }

    .form-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 24px;
      font-family: 'Clash Display', sans-serif;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-label {
      font-size: 12px;
      color: var(--text2);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 8px;
      display: block;
    }

    .form-input {
      width: 100%;
      background: var(--bg3);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px 16px;
      color: var(--text);
      font-size: 14px;
      font-family: 'Satoshi', sans-serif;
      outline: none;
      transition: border 0.2s;
    }

    .form-input:focus {
      border-color: rgba(0, 229, 160, 0.4);
    }

    .form-input::placeholder {
      color: var(--text3);
    }

    textarea.form-input {
      height: 110px;
      resize: vertical;
    }

    .form-submit {
      width: 100%;
      background: var(--accent);
      color: var(--bg);
      border: none;
      border-radius: 8px;
      padding: 14px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      font-family: 'Satoshi', sans-serif;
      letter-spacing: 0.04em;
      transition: all 0.2s;
      margin-top: 4px;
    }

    .form-submit:hover {
      background: var(--accent2);
      transform: translateY(-1px);
      box-shadow: 0 8px 24px var(--accent-glow);
    }

    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {}
