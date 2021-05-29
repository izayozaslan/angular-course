import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { UserService } from '../services/user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthExitGuard implements CanDeactivate<boolean> {
  constructor(private userService: UserService) {}
  canDeactivate(
   component: boolean,
   currentRoute: ActivatedRouteSnapshot,
   currentState: RouterStateSnapshot,
   nextState?: RouterStateSnapshot
   ): boolean {
    return !this.userService.isLoggedIn;
  }
  
}
