import {Component, Input, OnInit} from '@angular/core';
import {SetAdvert, UpdateAdvert} from "../../advert/_store/actions/advert.actions";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent implements OnInit {

  @Input() items;
  @Input() currentTab;
  @Input() isIcon = false;

  constructor(private store: Store, public router: Router, private db: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  async moveTo(item): Promise<void> {
    await this.store.dispatch(new SetAdvert(item)).toPromise();
    await this.router.navigate(['single']);
  }

  edit(item): void {
    console.log(item);
    this.router.navigate(['advert']);
    this.store.dispatch(new SetAdvert(item));
    this.store.dispatch(new UpdateAdvert({
      ...item
    }))
  }

  async delete(item): Promise<void> {
    await this.db.collection('apartment').doc(item.id).delete();
  }

  async favorites(item): Promise<void> {
    await this.db.collection('apartment').doc(item.id).update({
      ...item,
      isFavorite: true
    })
  }

}
