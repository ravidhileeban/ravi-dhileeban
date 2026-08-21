import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { ENGINEERING_GROUPS } from '../../data/skills.data';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="engineering" aria-labelledby="engineering-title">
      <div class="container">
        <app-section-heading
          eyebrow="03 — Engineering & Development"
          title="Practices I apply day to day"
          headingId="engineering-title"
          lead="The concepts behind the features — applied in production code rather than studied in isolation."
        />

        <div class="grid grid--2 eng__grid">
          @for (group of groups; track group.name) {
            <article class="card">
              <h3 class="card__title">{{ group.name }}</h3>
              <ul class="eng__items">
                @for (item of group.items; track item) {
                  <li>
                    <span class="eng__tick" aria-hidden="true">›</span>
                    {{ item }}
                  </li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .eng__items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 8px 16px;
        margin-top: 12px;
      }

      .eng__items li {
        display: flex;
        gap: 8px;
        align-items: baseline;
        font-size: 0.9rem;
        color: var(--muted);
      }

      .eng__tick {
        color: var(--accent);
        font-family: var(--font-mono);
        flex: none;
      }
    `,
  ],
})
export class Engineering {
  protected readonly groups = ENGINEERING_GROUPS;
}
