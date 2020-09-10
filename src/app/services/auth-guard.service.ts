import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }
  // canActivate(): boolean {
  //   if ( this.authService.isLoggedIn() ) {
  //     return true;
  //   }
  //   this.router.navigate(['/']);
  //   return false;
  // }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if (!this.authService.isLoggedIn) {
  //     this.router.navigate(['/']);
  //     return false;
  //   }
  //   return true;
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.firebaseAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/']);
        }
      });
  }


}
