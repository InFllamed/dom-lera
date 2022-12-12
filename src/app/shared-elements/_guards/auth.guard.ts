import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from "@ngxs/store";
import {AuthState} from "../../app-template/store/states/auth.state";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (this.store.selectSnapshot(AuthState.getUser)) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
