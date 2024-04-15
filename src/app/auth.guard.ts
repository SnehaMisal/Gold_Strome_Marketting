import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userLoginType!: string;
  constructor(private router: Router, private commonService:CommonService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.commonService.isAuthenticatedUser()) {
        const loginType = this.commonService.getUserLoginType();
       const userLoginType = localStorage.getItem('loginType');
       //const loginType = loginTypeString ? parseInt(loginTypeString, 10) : null;
       console.log("gaurd loginTypeString",userLoginType);
      //  if( this.userLoginType == 'Admin'){
      //   this.router.navigate(['admin']); 
      // }
      // if( this.userLoginType == 'CEO'){
      //   this.router.navigate(['ceo/dashboard']);
      // }
      // if( this.userLoginType == 'GM'){
      //   this.router.navigate(['gm/dashboard']);
      // }
      // if( this.userLoginType == 'SM'){
      //   this.router.navigate(['sm/dashboard']);
      // }
      // if( this.userLoginType == 'DSM'){
      //   this.router.navigate(['dsm/dashboard']);
      // }
      // if( this.userLoginType == 'SA'){
      //   this.router.navigate(['sa/dashboard']);
      // }
        // if (loginType === 1) {
        //   this.router.navigate(['ceo']);
        // } else if (loginType === 2) {

        //   this.router.navigate(['sam']);
        // }
        return true; // User is authenticated
      }
      this.router.navigate(['login']); // Redirect to the login page, for example.
      localStorage.clear();
      return false;
  }
  
}
