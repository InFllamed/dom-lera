import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {NavState} from "../store/states/nav.state";
import {Observable} from "rxjs";
import {NavArrayInterface} from "./_interfaces/nav-array.interface";
import {SignIn, SignOut, SignUp} from "../store/actions/auth.actions";
import {AuthState} from "../store/states/auth.state";
import {UserInterface} from "../../shared-elements/_interfaces/user.interface";
import {Router} from "@angular/router";
import {SetCurrentFilter} from "../../basic/_store/actions/popular.actions";
import {SetAdvert} from "../../advert/_store/actions/advert.actions";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Select(NavState.getNavArray) navArray$: Observable<NavArrayInterface[]>;
  @Select(AuthState.getUser) user$: Observable<UserInterface>;

  isOpenAuthPopup = false;
  isRegistration = false;
  isAuth = false;

  logo = './assets/img/logo.jpg'

  constructor(private store: Store, public router: Router) {
  }

  async sendData(email: string, password: string): Promise<void> {
    console.log(email, password);
    if (this.isAuth) {
      await this.store.dispatch(new SignIn(email, password)).toPromise();
    } else {
      await this.store.dispatch(new SignUp(email, password)).toPromise();
    }

    this.isOpenAuthPopup = false;

  }

  async signOut(): Promise<void> {
    await this.store.dispatch(new SignOut()).toPromise();
  }

  moveTo(item: NavArrayInterface): void {
    this.store.dispatch(new SetCurrentFilter({
      type: item.value
    }))
  }

  moveToAdvert(): void {
    this.store.dispatch(new SetAdvert(null));
    this.router.navigate(['advert']);
  }

}
