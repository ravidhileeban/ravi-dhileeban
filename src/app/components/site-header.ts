import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { NAV_ITEMS } from '../data/navigation.data';
import { PROFILE } from '../data/profile.data';

/** Sticky header: anchor navigation, scroll-spy and a mobile drawer. */
@Component({
  selector: 'app-site-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="hdr" [class.hdr--scrolled]="scrolled()">
      <div class="container hdr__inner">
        <a class="hdr__brand" href="#top">
          <span class="hdr__mark" aria-hidden="true">RD</span>
          <span class="hdr__brand-text">
            <span class="hdr__name">{{ profile.name }}</span>
            <span class="hdr__role">{{ profile.title }}</span>
          </span>
        </a>

        <nav class="hdr__nav" aria-label="Section navigation">
          <ul>
            @for (item of navItems; track item.id) {
              <li>
                <a
                  [href]="'#' + item.id"
                  [class.is-active]="active() === item.id"
                  [attr.aria-current]="active() === item.id ? 'true' : null"
                  >{{ item.label }}</a
                >
              </li>
            }
          </ul>
        </nav>

        <button
          type="button"
          class="hdr__toggle"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-nav"
          (click)="toggleMenu()"
        >
          <span class="visually-hidden">{{ menuOpen() ? 'Close' : 'Open' }} navigation menu</span>
          <span class="hdr__bars" [class.is-open]="menuOpen()" aria-hidden="true">
            <i></i><i></i><i></i>
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        class="hdr__drawer"
        [class.is-open]="menuOpen()"
        aria-label="Section navigation (mobile)"
        [attr.inert]="menuOpen() ? null : ''"
      >
        <ul>
          @for (item of navItems; track item.id) {
            <li>
              <a
                [href]="'#' + item.id"
                [class.is-active]="active() === item.id"
                (click)="closeMenu()"
                >{{ item.label }}</a
              >
            </li>
          }
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      .hdr {
        position: sticky;
        top: 0;
        z-index: 50;
        background: rgba(11, 16, 32, 0.88);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid transparent;
        transition:
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .hdr--scrolled {
        border-bottom-color: var(--border);
        background: rgba(11, 16, 32, 0.96);
      }

      .hdr__inner {
        min-height: var(--header-h);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .hdr__brand {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text-strong);
        text-decoration: none;
        flex: none;
      }

      .hdr__brand:hover {
        text-decoration: none;
      }

      .hdr__mark {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 8px;
        border: 1px solid rgba(56, 189, 248, 0.4);
        background: var(--accent-soft);
        color: var(--accent);
        font-family: var(--font-mono);
        font-size: 0.8rem;
        letter-spacing: 0.04em;
      }

      .hdr__brand-text {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
      }

      .hdr__name {
        font-weight: 600;
        font-size: 0.95rem;
      }

      .hdr__role {
        font-size: 0.72rem;
        color: var(--muted-dim);
      }

      .hdr__nav ul {
        display: flex;
        align-items: center;
        gap: 2px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .hdr__nav a {
        display: block;
        padding: 7px 10px;
        border-radius: var(--radius-sm);
        font-size: 0.85rem;
        color: var(--muted);
        text-decoration: none;
      }

      .hdr__nav a:hover {
        color: var(--text-strong);
        background: var(--surface);
        text-decoration: none;
      }

      .hdr__nav a.is-active {
        color: var(--accent);
        background: var(--accent-soft);
      }

      .hdr__toggle {
        display: none;
        width: 44px;
        height: 44px;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: 1px solid var(--border-strong);
        border-radius: var(--radius-sm);
        cursor: pointer;
      }

      .hdr__bars {
        display: grid;
        gap: 4px;
        width: 18px;
      }

      .hdr__bars i {
        display: block;
        height: 2px;
        background: var(--text);
        border-radius: 2px;
        transition: transform 0.18s ease, opacity 0.18s ease;
      }

      .hdr__bars.is-open i:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }

      .hdr__bars.is-open i:nth-child(2) {
        opacity: 0;
      }

      .hdr__bars.is-open i:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }

      .hdr__drawer {
        display: none;
        border-top: 1px solid var(--border);
        background: var(--bg-alt);
        max-height: min(70vh, 460px);
        overflow-y: auto;
      }

      .hdr__drawer ul {
        padding: 8px 20px 16px;
      }

      .hdr__drawer a {
        display: block;
        padding: 12px 4px;
        color: var(--text);
        border-bottom: 1px solid var(--border);
        text-decoration: none;
        font-size: 0.95rem;
      }

      .hdr__drawer a.is-active {
        color: var(--accent);
      }

      @media (max-width: 980px) {
        .hdr__nav {
          display: none;
        }

        .hdr__toggle {
          display: inline-flex;
        }

        .hdr__drawer.is-open {
          display: block;
        }
      }

      @media (max-width: 420px) {
        .hdr__role {
          display: none;
        }
      }
    `,
  ],
})
export class SiteHeader implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);
  private observer?: IntersectionObserver;

  protected readonly profile = PROFILE;
  protected readonly navItems = NAV_ITEMS;
  protected readonly active = signal<string>('');
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  ngAfterViewInit(): void {
    const view = this.document.defaultView;
    if (!view || !('IntersectionObserver' in view)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.active.set(visible.target.id);
          this.cdr.markForCheck();
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    );

    for (const item of this.navItems) {
      const el = this.document.getElementById(item.id);
      if (el) {
        this.observer.observe(el);
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    const y = this.document.defaultView?.scrollY ?? 0;
    const next = y > 8;
    if (next !== this.scrolled()) {
      this.scrolled.set(next);
      this.cdr.markForCheck();
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
