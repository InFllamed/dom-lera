import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {SetUser} from "./app-template/store/actions/auth.actions";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {InitAdverts} from "./basic/_store/actions/popular.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'dom-lera';

  constructor(private store: Store, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(async (user) => {
      console.log(user);
      this.store.dispatch(new SetUser(user))
    })
  }

  async ngOnInit(): Promise<void> {
    console.log('init');
    await this.store.dispatch(new InitAdverts()).toPromise();
  }
}
