import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading$ = this.loader.loading$;

  constructor(public loader: LoadingService,
    private authService: AuthService,
    private router: Router) {
  }
  title = 'angular-playground-gh';

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}
