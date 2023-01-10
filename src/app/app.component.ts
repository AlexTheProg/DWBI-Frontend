import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dwbi';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.title = (event as NavigationEnd).urlAfterRedirects.replace('/', '').toUpperCase();
      });
  }

}
