import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="contact" aria-labelledby="contact-title">
      <div class="container">
        <app-section-heading
          eyebrow="11 — Contact"
          title="Open to full stack roles"
          headingId="contact-title"
          lead="The quickest way to reach me is email. I am happy to talk through my experience, my projects or a role you are hiring for."
        />

        <div class="grid grid--3">
          <a class="card contact__card" [href]="'mailto:' + profile.email">
            <span class="contact__label">Email</span>
            <span class="contact__value">{{ profile.email }}</span>
          </a>

          @for (link of profile.social; track link.label) {
            <a
              class="card contact__card"
              [href]="link.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="contact__label">{{ link.label }}</span>
              <span class="contact__value">{{ link.handle }}</span>
            </a>
          }
        </div>

        <p class="contact__location">Based in {{ profile.location }}.</p>
      </div>
    </section>
  `,
  styles: [
    `
      .contact__card {
        display: grid;
        gap: 6px;
        text-decoration: none;
        color: var(--text);
      }

      .contact__card:hover {
        text-decoration: none;
        border-color: var(--accent);
      }

      .contact__label {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted-dim);
      }

      .contact__value {
        font-size: 0.98rem;
        color: var(--accent);
        overflow-wrap: anywhere;
      }

      .contact__location {
        margin: 24px 0 0;
        color: var(--muted-dim);
        font-size: 0.88rem;
      }
    `,
  ],
})
export class Contact {
  protected readonly profile = PROFILE;
}
