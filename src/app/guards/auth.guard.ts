import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CollegeWebsiteService } from '../college-website.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private service:CollegeWebsiteService, private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    boolean {
      
      if(!this.service.isLoggedIn()){
        this.router.navigate(['/adlog']);
        return false;
      }

      return  this.service.isLoggedIn();
  }
  
}
