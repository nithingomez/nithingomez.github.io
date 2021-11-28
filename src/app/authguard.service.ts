import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.authService.isUserLoggedIn()) {
      alert('Please login first !!');

      this.router.navigate(['login'], { queryParams: { retUrl: route.url } });
      return false;

    }

    return true;
  }

  canLoad(route: Route): boolean {
    alert('Cannot access this: Blocked by canLoad Guard')
    return false;
  }

}