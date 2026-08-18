import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { EDUCATION, PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="about" aria-labelledby="about-title">
      <div class="container">
        <app-section-heading
          eyebrow="01 — About"
          title="Full stack, end to end"
          headingId="about-title"
          lead="Where I sit in a project and how I approach the work."
        />

        <div class="about">
          <div class="about__prose">
            @for (paragraph of profile.summary; track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </div>

          <aside class="about__side">
            <div class="card">
              <h3 class="card__title">At a glance</h3>
              <dl class="about__dl">
                <div>
                  <dt>Role</dt>
                  <dd>{{ profile.title }}</dd>
                </div>
                <div>
                  <dt>Experience</dt>
                  <dd>3+ years, professional</dd>
                </div>
                <div>
                  <dt>Domains</dt>
                  <dd>HRMS · CRM · Insurance · Port Billing · NGO/Trust</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{{ profile.location }}</dd>
                </div>
                <div>
                  <dt>Ways of working</dt>
                  <dd>Agile / Scrum</dd>
                </div>
              </dl>
            </div>

            <div class="card">
              <h3 class="card__title">Education</h3>
              <ul class="about__edu">
                @for (item of education; track item.degree) {
                  <li>
                    <span class="about__edu-degree">{{ item.degree }}</span>
                    <span class="about__edu-meta"
                      >{{ item.institution }} · {{ item.year }} · {{ item.result }}</span
                    >
                  </li>
                }
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.9fr);
        gap: clamp(24px, 3vw, 40px);
        align-items: start;
      }

      .about__prose p {
        color: var(--muted);
        max-width: 68ch;
      }

      .about__prose p:first-child {
        color: var(--text);
        font-size: 1.05rem;
      }

      .about__side {
        display: grid;
        gap: 16px;
      }

      .about__dl {
        margin: 8px 0 0;
        display: grid;
        gap: 12px;
      }

      .about__dl div {
        display: grid;
        gap: 2px;
      }

      .about__dl dt {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted-dim);
      }

      .about__dl dd {
        margin: 0;
        font-size: 0.92rem;
      }

      .about__edu {
        display: grid;
        gap: 14px;
        margin-top: 8px;
      }

      .about__edu li {
        display: grid;
        gap: 2px;
      }

      .about__edu-degree {
        font-size: 0.95rem;
        color: var(--text-strong);
      }

      .about__edu-meta {
        font-size: 0.82rem;
        color: var(--muted-dim);
      }

      @media (max-width: 880px) {
        .about {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly education = EDUCATION;
}
