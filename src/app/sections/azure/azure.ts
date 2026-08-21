import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { CLOUD_SERVICES } from '../../data/platform.data';

@Component({
  selector: 'app-azure',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="azure" aria-labelledby="azure-title">
      <div class="container">
        <app-section-heading
          eyebrow="07 — Azure & Cloud"
          title="Cloud services I work with"
          headingId="azure-title"
          lead="Working experience with the Azure services used on the applications I have built — what each one does and how I use it."
        />

        <div class="grid grid--3">
          @for (service of services; track service.name) {
            <article class="card azure__card">
              <span class="azure__icon" aria-hidden="true">☁</span>
              <h3 class="card__title">{{ service.name }}</h3>
              <p class="azure__desc">{{ service.description }}</p>
              <p class="azure__usage">{{ service.usage }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .azure__card {
        display: flex;
        flex-direction: column;
      }

      .azure__icon {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: var(--accent-soft);
        color: var(--accent);
        border: 1px solid rgba(56, 189, 248, 0.28);
        margin-bottom: 14px;
        font-size: 1rem;
      }

      .azure__desc {
        color: var(--text);
        font-size: 0.92rem;
        margin-bottom: 8px;
      }

      .azure__usage {
        color: var(--muted-dim);
        font-size: 0.85rem;
        margin: 0;
      }
    `,
  ],
})
export class Azure {
  protected readonly services = CLOUD_SERVICES;
}
