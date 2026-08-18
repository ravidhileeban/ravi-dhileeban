import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { WORKFLOW_STEPS } from '../../data/platform.data';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="workflow" aria-labelledby="workflow-title">
      <div class="container">
        <app-section-heading
          eyebrow="09 — Development Workflow"
          title="From requirement to deployment"
          headingId="workflow-title"
          lead="How work moves through a sprint. CI/CD and Docker appear here at a foundational level — I work with pipelines rather than own them."
        />

        <ol class="wf">
          @for (step of steps; track step.step; let last = $last; let i = $index) {
            <li class="wf__step">
              <div class="wf__marker" aria-hidden="true">
                <span class="wf__num">{{ i + 1 }}</span>
                @if (!last) {
                  <span class="wf__line"></span>
                }
              </div>
              <div class="wf__card">
                <h3 class="wf__title">{{ step.step }}</h3>
                <p class="wf__detail">{{ step.detail }}</p>
                <ul class="badges">
                  @for (tool of step.tools; track tool) {
                    <li class="badge badge--mono">{{ tool }}</li>
                  }
                </ul>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [
    `
      .wf {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 0;
      }

      .wf__step {
        display: grid;
        grid-template-columns: 34px minmax(0, 1fr);
        gap: 16px;
      }

      .wf__marker {
        display: grid;
        justify-items: center;
        gap: 6px;
      }

      .wf__num {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid var(--border-strong);
        background: var(--surface);
        color: var(--accent);
        font-family: var(--font-mono);
        font-size: 0.78rem;
        flex: none;
      }

      .wf__line {
        width: 1px;
        flex: 1;
        min-height: 100%;
        background: var(--border-strong);
      }

      .wf__card {
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--surface);
        padding: 16px 18px;
        margin-bottom: 16px;
      }

      .wf__title {
        margin: 0 0 4px;
        font-size: 1rem;
      }

      .wf__detail {
        color: var(--muted);
        font-size: 0.88rem;
        margin-bottom: 12px;
      }
    `,
  ],
})
export class Workflow {
  protected readonly steps = WORKFLOW_STEPS;
}
