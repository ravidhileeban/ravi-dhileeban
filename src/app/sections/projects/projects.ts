import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeading } from '../../components/section-heading';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt" id="projects" aria-labelledby="projects-title">
      <div class="container">
        <app-section-heading
          eyebrow="05 — Featured Projects"
          title="Work I have delivered"
          headingId="projects-title"
          lead="Enterprise products built with the team at work. Repository and demo links are private or unavailable where marked."
        />

        <div class="prj">
          @for (project of projects; track project.name) {
            <article class="card prj__card">
              <header class="prj__head">
                <div>
                  <h3 class="card__title">{{ project.name }}</h3>
                  <p class="card__meta">{{ project.category }}</p>
                </div>
                <span class="badge badge--accent prj__role">{{ project.role }}</span>
              </header>

              <p class="prj__summary">{{ project.summary }}</p>

              <div class="prj__cols">
                <div>
                  <p class="label">Key responsibilities</p>
                  <ul class="bullets">
                    @for (item of project.responsibilities; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>

                  <p class="label">Technical highlights</p>
                  <ul class="bullets">
                    @for (item of project.highlights; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </div>

                <div class="prj__arch">
                  <p class="label">Architecture</p>
                  <ol class="prj__arch-list">
                    @for (layer of project.architecture; track layer; let last = $last) {
                      <li>
                        <span>{{ layer }}</span>
                        @if (!last) {
                          <span class="prj__arch-arrow" aria-hidden="true">↓</span>
                        }
                      </li>
                    }
                  </ol>
                </div>
              </div>

              <p class="label">Technologies</p>
              <ul class="badges">
                @for (tech of project.technologies; track tech) {
                  <li class="badge badge--mono">{{ tech }}</li>
                }
              </ul>

              <footer class="prj__links">
                @if (project.repoUrl) {
                  <a class="btn" [href]="project.repoUrl" target="_blank" rel="noopener noreferrer"
                    >GitHub Repository</a
                  >
                } @else {
                  <span class="prj__placeholder">[GitHub Repository]</span>
                }

                @if (project.demoUrl) {
                  <a class="btn" [href]="project.demoUrl" target="_blank" rel="noopener noreferrer"
                    >Live Demo</a
                  >
                } @else {
                  <span class="prj__placeholder">[Live Demo]</span>
                }
              </footer>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .prj {
        display: grid;
        gap: 20px;
      }

      .prj__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
        flex-wrap: wrap;
      }

      .prj__role {
        flex: none;
      }

      .prj__summary {
        color: var(--muted);
        max-width: 72ch;
      }

      .prj__cols {
        display: grid;
        grid-template-columns: minmax(0, 1.6fr) minmax(0, 0.9fr);
        gap: clamp(16px, 3vw, 36px);
      }

      .prj__arch-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 18px;
      }

      .prj__arch-list li {
        position: relative;
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--text);
        padding: 9px 12px;
        border: 1px solid var(--border);
        border-radius: var(--radius-sm);
        background: var(--bg-alt);
      }

      .prj__arch-arrow {
        position: absolute;
        left: 50%;
        bottom: -15px;
        transform: translateX(-50%);
        color: var(--accent);
        line-height: 1;
      }

      .prj__links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        margin-top: 20px;
        padding-top: 18px;
        border-top: 1px solid var(--border);
      }

      .prj__placeholder {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--muted-dim);
        border: 1px dashed var(--border-strong);
        border-radius: var(--radius-sm);
        padding: 10px 14px;
      }

      @media (max-width: 800px) {
        .prj__cols {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class Projects {
  protected readonly projects = PROJECTS;
}
