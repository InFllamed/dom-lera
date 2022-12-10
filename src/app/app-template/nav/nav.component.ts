import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {NavState} from "../store/states/nav.state";
import {Observable} from "rxjs";
import {NavArrayInterface} from "./_interfaces/nav-array.interface";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {SignIn, SignOut, SignUp} from "../store/actions/auth.actions";
import {AuthState} from "../store/states/auth.state";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Select(NavState.getNavArray) navArray$: Observable<NavArrayInterface[]>;
  @Select(AuthState.getUser) user$: Observable<any>;

  isOpenAuthPopup = false;
  isRegistration = false;
  isAuth = false;

  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, private store: Store) {
  }

  async sendData(): Promise<void> {
    if (this.isAuth) {
      await this.store.dispatch(new SignIn(this.email, this.password)).toPromise();
    } else {
      await this.store.dispatch(new SignUp(this.email, this.password)).toPromise();
    }

    this.isOpenAuthPopup = false;

  }

  async signOut(): Promise<void> {
    await this.store.dispatch(new SignOut()).toPromise();
  }

}
