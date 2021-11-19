import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommonService } from './shared/common.service';

@Injectable({
  providedIn: 'root'
})
// export class CustomResolveGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     //check some condition
//     let x = 'some condition'
//     if (x === 'not some condition') {
//       alert('You are not allowed to view this page');
//       //redirect to login/home page etc
//       //return false to cancel the navigation
//       return false;
//     }
//     return true;
//   }

// }

export class CustomResolveGuard implements Resolve<any> {
  constructor(private commonService: CommonService, private router: Router, private activatedRoute: ActivatedRoute) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-expect-error
    return this.commonService.getAllPosts().pipe(
      map(post => {
        if (post) {
          return post;
        } else {
          this.router.navigate(['/feature1/secondComp']);
          return null;
        }
      }));
  }

}
