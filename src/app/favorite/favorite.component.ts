import {Component} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AdvertInterface} from "../shared-elements/_interfaces/advert.interface";
import {Store} from "@ngxs/store";
import {AuthState} from "../app-template/store/states/auth.state";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  data: AdvertInterface[];

  constructor(private db: AngularFirestore, private store: Store) {
    db.collection('apartment').valueChanges().subscribe((data: AdvertInterface[]) => {
      this.data = data.filter(f => f.isFavorite && f.userId === this.store.selectSnapshot(AuthState.getUser).uid);
    })
  }

}
