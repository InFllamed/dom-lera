import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AdvertTypeEnum} from "../../shared-elements/_enums/advert-type.enum";
import {AdvertInterface} from "../../shared-elements/_interfaces/advert.interface";
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {FilterTypePipeEnum} from "../../shared-elements/_enums/filter-type-pipe.enum";
import {PopularState} from "../_store/states/popular.state";
import {Observable} from "rxjs";
import {SetCurrentFilter} from "../_store/actions/popular.actions";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  @Select(PopularState.getCurrentFilter) currentFilter$: Observable<any>;
  @Select(PopularState.getAdverts) adverts$: Observable<AdvertInterface[]>;

  tabsArray: { name: string, id: AdvertTypeEnum }[] = [
    {
      name: 'Оренда',
      id: AdvertTypeEnum.rent
    },
    {
      name: 'Продаж',
      id: AdvertTypeEnum.sale
    },
    {
      name: 'Подобово',
      id: AdvertTypeEnum.daily
    }
  ];

  data: AdvertInterface[];

  currentTab: { name: string, id: AdvertTypeEnum };

  filterTypePipeEnum = FilterTypePipeEnum;

  constructor(private db: AngularFirestore, private router: Router, private store: Store) {

    db.collection('apartment').snapshotChanges().subscribe(data => {
      this.data = data.map(item => {
        return {
          ...item.payload.doc.data() as any,
          id: item.payload.doc.id
        }
      })
    });


    this.currentFilter$.subscribe(filter => {
      if (!filter) {
        return;
      }
      if (filter.type) {
        this.currentTab = {
          ...this.currentTab,
          id: filter.type
        }
      }
    })
  }

  openTab(tab: { name: string, id: AdvertTypeEnum }): void {
    this.store.dispatch(new SetCurrentFilter(null));
    this.currentTab = tab;
    localStorage.setItem('tab', JSON.stringify(tab.id));
  }

  async ngOnInit(): Promise<void> {
    this.currentTab = this.tabsArray.find(f => +f.id === +JSON.parse(JSON.stringify(localStorage.getItem('tab')))) ?? this.tabsArray[0];
  }

}
