import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { DATABASE_GROUPS } from '../../data/platform.data';

@Component({
  selector: 'app-database',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="database" aria-labelledby="database-title">
      <div class="container">
        <app-section-heading
          eyebrow="08 — Database Engineering"
          title="Comfortable below the API"
          headingId="database-title"
          lead="Data work is part of the feature, not someone else's job: designing the schema, writing the queries and making them faster when they are not."
        />

        <div class="grid grid--3">
          @for (group of groups; track group.name) {
            <article class="card db__card">
              <h3 class="card__title">{{ group.name }}</h3>
              <p class="db__detail">{{ group.detail }}</p>
              <ul class="badges">
                @for (item of group.items; track item) {
                  <li class="badge">{{ item }}</li>
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
      .db__detail {
        color: var(--muted-dim);
        font-size: 0.85rem;
        margin-bottom: 14px;
      }
    `,
  ],
})
export class Database {
  protected readonly groups = DATABASE_GROUPS;
}
