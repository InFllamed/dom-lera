import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AdvertState} from "../advert/_store/states/advert.state";
import {Observable} from "rxjs";
import {AdvertInterface} from "../shared-elements/_interfaces/advert.interface";
import {AdvertTypeEnum} from "../shared-elements/_enums/advert-type.enum";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-single-advert',
  templateUrl: './single-advert.component.html',
  styleUrls: ['./single-advert.component.scss']
})
export class SingleAdvertComponent {

  @Select(AdvertState.getCurrentAdvert) currentAdvert$: Observable<AdvertInterface>;

  advertTypeEnum = AdvertTypeEnum;

  data: AdvertInterface[];

  constructor(private db: AngularFirestore, private store: Store) {
    db.collection('apartment').valueChanges().subscribe((data: AdvertInterface[]) => {
      this.data = data.filter(f => f.type !== this.store.selectSnapshot(AdvertState.getCurrentAdvert).type);
      console.log(data);
    })
  }

}
