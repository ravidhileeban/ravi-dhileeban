import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { ARCHITECTURE_CLOUD, ARCHITECTURE_LAYERS } from '../../data/platform.data';

/** Vertical request path with the Azure services shown alongside it. */
@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="architecture" aria-labelledby="architecture-title">
      <div class="container">
        <app-section-heading
          eyebrow="06 — Application Architecture"
          title="How a request travels"
          headingId="architecture-title"
          lead="The layers I work across on a typical application, from the Angular screen down to the database — with the Azure services that sit alongside it."
        />

        <div class="arch">
          <ol class="arch__flow">
            @for (layer of layers; track layer.name; let last = $last; let i = $index) {
              <li class="arch__layer">
                <span class="arch__index" aria-hidden="true">{{ i + 1 }}</span>
                <div class="arch__body">
                  <p class="arch__tech">{{ layer.tech }}</p>
                  <p class="arch__name">{{ layer.name }}</p>
                  <p class="arch__detail">{{ layer.detail }}</p>
                </div>
                @if (!last) {
                  <span class="arch__arrow" aria-hidden="true">↓</span>
                }
              </li>
            }
          </ol>

          <aside class="arch__cloud" aria-label="Azure services used alongside the application">
            <p class="arch__cloud-title">Azure services around the application</p>
            <ul class="arch__cloud-list">
              @for (service of cloud; track service) {
                <li>
                  <span class="arch__cloud-link" aria-hidden="true">↔</span>
                  {{ service }}
                </li>
              }
            </ul>
            <p class="arch__cloud-note">
              Secrets are read from Key Vault at startup, files are stored in Blob Storage, longer
              tasks are queued, and scheduled or event-driven work runs in Functions.
            </p>
          </aside>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .arch {
        display: grid;
        grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.9fr);
        gap: clamp(24px, 4vw, 48px);
        align-items: start;
      }

      .arch__flow {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 26px;
      }

      .arch__layer {
        position: relative;
        display: flex;
        gap: 14px;
        align-items: flex-start;
        padding: 14px 16px;
        border: 1px solid var(--border);
        border-left: 2px solid var(--accent);
        border-radius: var(--radius-sm);
        background: var(--surface);
      }

      .arch__index {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        color: var(--muted-dim);
        border: 1px solid var(--border-strong);
        border-radius: 4px;
        padding: 1px 6px;
        margin-top: 3px;
        flex: none;
      }

      .arch__tech {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--accent);
        margin: 0 0 2px;
      }

      .arch__name {
        margin: 0;
        font-size: 0.95rem;
        color: var(--text-strong);
        font-weight: 600;
      }

      .arch__detail {
        margin: 2px 0 0;
        font-size: 0.85rem;
        color: var(--muted);
      }

      .arch__arrow {
        position: absolute;
        left: 50%;
        bottom: -21px;
        transform: translateX(-50%);
        color: var(--accent);
        line-height: 1;
      }

      .arch__cloud {
        position: sticky;
        top: calc(var(--header-h) + 20px);
        background: var(--surface);
        border: 1px dashed var(--border-strong);
        border-radius: var(--radius);
        padding: 22px;
      }

      .arch__cloud-title {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted-dim);
        margin: 0 0 14px;
      }

      .arch__cloud-list {
        display: grid;
        gap: 10px;
        margin-bottom: 16px;
      }

      .arch__cloud-list li {
        display: flex;
        gap: 10px;
        align-items: baseline;
        font-size: 0.9rem;
      }

      .arch__cloud-link {
        color: var(--accent);
        font-family: var(--font-mono);
      }

      .arch__cloud-note {
        margin: 0;
        font-size: 0.82rem;
        color: var(--muted-dim);
      }

      @media (max-width: 880px) {
        .arch {
          grid-template-columns: 1fr;
        }

        .arch__cloud {
          position: static;
        }
      }
    `,
  ],
})
export class Architecture {
  protected readonly layers = ARCHITECTURE_LAYERS;
  protected readonly cloud = ARCHITECTURE_CLOUD;
}
