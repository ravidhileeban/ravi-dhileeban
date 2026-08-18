import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { About } from './sections/about/about';
import { Architecture } from './sections/architecture/architecture';
import { Azure } from './sections/azure/azure';
import { Contact } from './sections/contact/contact';
import { Database } from './sections/database/database';
import { Engineering } from './sections/engineering/engineering';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Resume } from './sections/resume/resume';
import { Skills } from './sections/skills/skills';
import { Workflow } from './sections/workflow/workflow';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    SiteFooter,
    Hero,
    About,
    Skills,
    Engineering,
    Experience,
    Projects,
    Architecture,
    Azure,
    Database,
    Workflow,
    Resume,
    Contact,
  ],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>

    <app-site-header />

    <main id="main">
      <app-hero />
      <app-about />
      <app-skills />
      <app-engineering />
      <app-experience />
      <app-projects />
      <app-architecture />
      <app-azure />
      <app-database />
      <app-workflow />
      <app-resume />
      <app-contact />
    </main>

    <app-site-footer />
  `,
})
export class App {}
