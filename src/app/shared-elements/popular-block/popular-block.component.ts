import {Component, Input, OnInit} from '@angular/core';
import {FilterTypePipeEnum} from "../_enums/filter-type-pipe.enum";
import {SetAdvert, UpdateAdvert} from "../../advert/_store/actions/advert.actions";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AdvertInterface} from "../_interfaces/advert.interface";

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent implements OnInit {

  @Input() items;
  @Input() currentTab;

  initialPagination = {
    itemsPerPage: 20,
    currentPage: 1,
    totalItems: null,
  };

  filterTypePipeEnum = FilterTypePipeEnum;

  constructor(private store: Store, public router: Router, private db: AngularFirestore) {
    db.collection('apartment').valueChanges().subscribe((data: AdvertInterface[]) => {
      this.initialPagination.totalItems = data.length;
      console.log(data.length);
    });
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

  paginate<T>(rows: T[], configPagination): T[] {
    const start = (configPagination.currentPage - 1) * configPagination.itemsPerPage;
    const end = start + configPagination.itemsPerPage;
    return rows.slice(start, end);
  }

  initPagination(event): any[] {
    return this.paginate<any>(this.items, event);
  }

  onChangePage(event): void {
    this.initPagination(event);
  }

}
