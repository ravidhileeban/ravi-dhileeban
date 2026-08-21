import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Consistent eyebrow + title + lead block used at the top of every section. */
@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="section__head">
      <p class="section__eyebrow">{{ eyebrow }}</p>
      <h2 [id]="headingId">{{ title }}</h2>
      @if (lead) {
        <p class="section__lead">{{ lead }}</p>
      }
    </header>
  `,
})
export class SectionHeading {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() lead = '';
  @Input({ required: true }) headingId = '';
}
