import {Component} from '@angular/core';
import {AdvertInterface} from "../shared-elements/_interfaces/advert.interface";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  data: AdvertInterface[];

  constructor(private db: AngularFirestore) {
    db.collection('apartment').snapshotChanges().subscribe(data => {
      this.data = data.map(item => {
        return {
          ...item.payload.doc.data() as any,
          id: item.payload.doc.id
        }
      });
    });
  }

}
