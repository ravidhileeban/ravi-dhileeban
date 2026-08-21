import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { EXPERIENCE } from '../../data/experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="experience" aria-labelledby="experience-title">
      <div class="container">
        <app-section-heading
          eyebrow="04 — Professional Experience"
          title="Career timeline"
          headingId="experience-title"
          lead="From intern to full stack developer, building enterprise applications across five product domains."
        />

        <ol class="tl">
          @for (role of roles; track role.position + role.period) {
            <li class="tl__item">
              <span class="tl__marker" [class.tl__marker--current]="role.current" aria-hidden="true"></span>

              <article class="card tl__card">
                <div class="tl__head">
                  <div>
                    <h3 class="card__title">{{ role.position }}</h3>
                    <p class="tl__company">{{ role.company }}</p>
                  </div>
                  <div class="tl__period">
                    <span class="badge badge--mono" [class.badge--accent]="role.current">{{
                      role.period
                    }}</span>
                  </div>
                </div>

                <ul class="badges tl__domains">
                  @for (domain of role.domains; track domain) {
                    <li class="badge">{{ domain }}</li>
                  }
                </ul>

                <p class="label">Responsibilities</p>
                <ul class="bullets">
                  @for (item of role.responsibilities; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>

                <p class="label">Key contributions</p>
                <ul class="bullets">
                  @for (item of role.contributions; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>

                <p class="label">Technologies</p>
                <ul class="badges">
                  @for (tech of role.technologies; track tech) {
                    <li class="badge badge--mono">{{ tech }}</li>
                  }
                </ul>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [
    `
      .tl {
        list-style: none;
        margin: 0;
        padding: 0 0 0 28px;
        position: relative;
      }

      .tl::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 12px;
        bottom: 12px;
        width: 1px;
        background: var(--border-strong);
      }

      .tl__item {
        position: relative;
        margin-bottom: 20px;
      }

      .tl__item:last-child {
        margin-bottom: 0;
      }

      .tl__marker {
        position: absolute;
        left: -28px;
        top: 26px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: var(--bg);
        border: 2px solid var(--border-strong);
      }

      .tl__marker--current {
        border-color: var(--accent);
        background: var(--accent);
        box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.16);
      }

      .tl__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }

      .tl__company {
        margin: 0;
        color: var(--accent);
        font-size: 0.95rem;
      }

      .tl__domains {
        margin-bottom: 4px;
      }

      @media (max-width: 560px) {
        .tl {
          padding-left: 20px;
        }

        .tl__marker {
          left: -20px;
        }
      }
    `,
  ],
})
export class Experience {
  protected readonly roles = EXPERIENCE;
}
