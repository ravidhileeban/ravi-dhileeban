import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { SKILL_GROUPS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <app-section-heading
          eyebrow="02 — Technical Skills"
          title="Technologies I build with"
          headingId="skills-title"
          lead="Grouped by layer, listed honestly: core technologies I use on delivered work, kept separate from the foundational ones."
        />

        <div class="grid grid--3 skills__grid">
          @for (group of coreGroups; track group.id) {
            <article class="card skills__card">
              <h3 class="card__title">{{ group.name }}</h3>
              <p class="skills__note">{{ group.note }}</p>
              <ul class="badges">
                @for (skill of group.skills; track skill) {
                  <li class="badge">{{ skill }}</li>
                }
              </ul>
            </article>
          }
        </div>

        @for (group of foundationalGroups; track group.id) {
          <article class="card skills__foundational">
            <div>
              <h3 class="card__title">{{ group.name }}</h3>
              <p class="skills__note">{{ group.note }}</p>
            </div>
            <ul class="badges">
              @for (skill of group.skills; track skill) {
                <li class="badge badge--mono">{{ skill }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .skills__card {
        display: flex;
        flex-direction: column;
      }

      .skills__note {
        color: var(--muted-dim);
        font-size: 0.85rem;
        margin-bottom: 16px;
      }

      .skills__foundational {
        margin-top: 20px;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 20px;
        align-items: center;
        border-style: dashed;
        background: transparent;
      }

      .skills__foundational .card__title {
        font-size: 1rem;
      }

      .skills__foundational .skills__note {
        margin-bottom: 0;
      }

      @media (max-width: 760px) {
        .skills__foundational {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class Skills {
  protected readonly coreGroups = SKILL_GROUPS.filter((group) => group.level === 'core');
  protected readonly foundationalGroups = SKILL_GROUPS.filter(
    (group) => group.level === 'foundational',
  );
}
