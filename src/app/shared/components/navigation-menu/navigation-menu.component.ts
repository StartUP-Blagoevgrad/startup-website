import { Component } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
  // any logic or data can be added here
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  isMobile$: Observable<boolean>;
  currentRoute = '';

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.isMobile$ = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
    .pipe(map(result => result.matches));
  

  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.currentRoute = event.urlAfterRedirects;
    }
  });
}

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  shouldShowMenu(isMobile: boolean | null) {
    
    return !isMobile || this.isMenuOpen;
  }

  mobileOrDesktopValue(): Observable<number> {
    return this.isMobile$.pipe(
      map(isMobile => isMobile ? 0 : 1)
    );
  }

}

