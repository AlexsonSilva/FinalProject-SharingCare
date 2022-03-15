import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: AuthService, private router: Router, private afAuth: AngularFireAuth){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if(user) {
          resolve(true);
        }else {
          console.log('Auth Guard: user is not logged in');
          this.router.navigate(['/login']);
          resolve(false);
        }
      })
    })
  }
  
}
