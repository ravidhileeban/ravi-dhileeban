import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/profile.data';

/** Opening screen: identity, stack path and primary calls to action. */
@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="hero__eyebrow">
            <span class="hero__dot" aria-hidden="true"></span>
            {{ profile.name }} · {{ profile.location }}
          </p>

          <h1 id="hero-title">Full Stack <span class="hero__accent">.NET &amp; Angular</span> Developer</h1>

          <p class="hero__lead">{{ profile.tagline }}</p>

          <ul class="hero__facts">
            @for (fact of profile.highlights; track fact) {
              <li>{{ fact }}</li>
            }
          </ul>

          <div class="btn-row hero__actions">
            <a class="btn btn--primary" href="#projects">View My Work</a>
            <a class="btn" [href]="profile.resumePath" download>Download Resume</a>
            <a class="btn" href="#contact">Contact Me</a>
          </div>

          <ul class="hero__social" aria-label="Social profiles">
            @for (link of profile.social; track link.label) {
              <li>
                <a [href]="link.url" target="_blank" rel="noopener noreferrer">
                  {{ link.label }}
                  <span class="hero__social-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            }
          </ul>
        </div>

        <aside class="hero__stack" aria-label="Technology stack overview">
          <p class="hero__stack-title">Stack I work across</p>
          <ol class="hero__stack-list">
            @for (layer of stack; track layer.name; let last = $last) {
              <li>
                <span class="hero__stack-name">{{ layer.name }}</span>
                <span class="hero__stack-note">{{ layer.note }}</span>
                @if (!last) {
                  <span class="hero__stack-arrow" aria-hidden="true">↓</span>
                }
              </li>
            }
          </ol>
        </aside>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        position: relative;
        padding: clamp(56px, 9vw, 104px) 0 clamp(48px, 7vw, 88px);
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        inset: -40% 30% 40% -10%;
        background: radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.1), transparent 62%);
        pointer-events: none;
      }

      .hero__inner {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
        gap: clamp(28px, 4vw, 56px);
        align-items: start;
      }

      .hero__eyebrow {
        display: flex;
        align-items: center;
        gap: 9px;
        font-family: var(--font-mono);
        font-size: 0.78rem;
        letter-spacing: 0.08em;
        color: var(--muted);
        margin: 0 0 18px;
      }

      .hero__dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.14);
        flex: none;
      }

      .hero__accent {
        color: var(--accent);
      }

      .hero__lead {
        color: var(--muted);
        font-size: clamp(1rem, 0.95rem + 0.3vw, 1.12rem);
        max-width: 60ch;
        margin-bottom: 22px;
      }

      .hero__facts {
        display: grid;
        gap: 8px;
        margin: 0 0 28px;
      }

      .hero__facts li {
        position: relative;
        padding-left: 22px;
        font-size: 0.92rem;
        color: var(--text);
      }

      .hero__facts li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.62em;
        width: 10px;
        height: 1px;
        background: var(--accent);
      }

      .hero__actions {
        margin-bottom: 24px;
      }

      .hero__social {
        display: flex;
        gap: 20px;
        font-size: 0.88rem;
      }

      .hero__social-arrow {
        font-size: 0.75rem;
      }

      .hero__stack {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 22px;
        box-shadow: var(--shadow);
      }

      .hero__stack-title {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted-dim);
        margin: 0 0 16px;
      }

      .hero__stack-list {
        margin: 0;
        padding: 0;
        list-style: none;
        counter-reset: layer;
      }

      .hero__stack-list li {
        display: grid;
        gap: 2px;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface-2);
        position: relative;
        margin-bottom: 20px;
      }

      .hero__stack-list li:last-child {
        margin-bottom: 0;
      }

      .hero__stack-name {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--text-strong);
      }

      .hero__stack-note {
        font-size: 0.76rem;
        color: var(--muted-dim);
      }

      .hero__stack-arrow {
        position: absolute;
        left: 50%;
        bottom: -17px;
        transform: translateX(-50%);
        color: var(--accent);
        font-size: 0.85rem;
        line-height: 1;
      }

      @media (max-width: 900px) {
        .hero__inner {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class Hero {
  protected readonly profile = PROFILE;

  protected readonly stack = [
    { name: 'Angular', note: 'TypeScript UI, components, reactive forms' },
    { name: 'REST API', note: 'HTTP contracts between client and server' },
    { name: 'ASP.NET Core', note: 'Controllers, middleware, authentication' },
    { name: 'Service Layer', note: 'Business rules, DTOs, validation' },
    { name: 'EF Core / Dapper', note: 'Data access and mapping' },
    { name: 'SQL Server / PostgreSQL', note: 'Schema, queries, stored procedures' },
    { name: 'Azure Services', note: 'Key Vault, Storage, Functions' },
  ];
}
