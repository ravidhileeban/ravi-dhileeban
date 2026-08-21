import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../data/profile.data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="ftr">
      <div class="container ftr__inner">
        <p class="ftr__line">
          <span>{{ profile.name }}</span>
          <span class="ftr__sep" aria-hidden="true">·</span>
          <span>{{ profile.title }}</span>
        </p>
        <p class="ftr__line ftr__line--muted">
          Built with Angular, TypeScript and SCSS. Deployed with GitHub Pages.
        </p>
        <ul class="ftr__links">
          @for (link of profile.social; track link.label) {
            <li>
              <a [href]="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
            </li>
          }
          <li><a [href]="'mailto:' + profile.email">Email</a></li>
        </ul>
      </div>
    </footer>
  `,
  styles: [
    `
      .ftr {
        border-top: 1px solid var(--border);
        padding: 32px 0 40px;
        background: var(--bg-alt);
      }

      .ftr__inner {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: center;
        text-align: center;
      }

      .ftr__line {
        margin: 0;
        font-size: 0.9rem;
      }

      .ftr__line--muted {
        color: var(--muted-dim);
        font-size: 0.82rem;
      }

      .ftr__sep {
        margin: 0 8px;
        color: var(--muted-dim);
      }

      .ftr__links {
        display: flex;
        gap: 18px;
        margin-top: 8px;
        font-size: 0.85rem;
      }
    `,
  ],
})
export class SiteFooter {
  protected readonly profile = PROFILE;
}
