import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from '../college-website.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate, CanActivateChild {

  constructor(private service:CollegeWebsiteService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      
      if(!this.service.isLoggedIn()){
        this.router.navigate(['/uslog']);
        return false;
      }

      return  this.service.isLoggedIn();
  }



  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
      if(!this.service.isLoggedIn()){
        this.router.navigate(['/uslog']);
        return false;
      }

      return  this.service.isLoggedIn();
  }
  }
  

