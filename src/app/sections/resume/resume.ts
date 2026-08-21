import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="resume" aria-labelledby="resume-title">
      <div class="container">
        <app-section-heading
          eyebrow="10 — Resume"
          title="The one-page version"
          headingId="resume-title"
          lead="A PDF summary of my experience, projects, skills and education."
        />

        <div class="card resume__card">
          <div>
            <h3 class="card__title">{{ profile.name }} — {{ profile.title }}</h3>
            <p class="resume__note">
              PDF · opens in a new tab or saves directly, depending on your browser.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn--primary" [href]="profile.resumePath" download>Download Resume</a>
            <a class="btn" [href]="profile.resumePath" target="_blank" rel="noopener noreferrer"
              >View in browser</a
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .resume__card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
      }

      .resume__note {
        margin: 0;
        color: var(--muted-dim);
        font-size: 0.85rem;
      }
    `,
  ],
})
export class Resume {
  protected readonly profile = PROFILE;
}
