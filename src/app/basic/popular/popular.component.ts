import {Component, OnInit} from '@angular/core';
import {FilterTypePipeEnum} from "../../shared-elements/_enums/filter-type-pipe.enum";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {AdvertTypeEnum} from "../../shared-elements/_enums/advert-type.enum";
import {AdvertInterface} from "../../shared-elements/_interfaces/advert.interface";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

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

  blockArray$: Observable<any>

  currentTab: { name: string, id: AdvertTypeEnum };

  filterTypePipeEnum = FilterTypePipeEnum;

  constructor(private db: AngularFirestore) {
    db.collection('apartment').valueChanges().subscribe((data: AdvertInterface[]) => {
      this.data = data;
      console.log(data);
    })
  }

  openTab(tab: { name: string, id: AdvertTypeEnum }): void {
    this.currentTab = tab;
    localStorage.setItem('tab', JSON.stringify(tab.id));
  }

  async ngOnInit(): Promise<void> {
    this.currentTab = this.tabsArray.find(f => +f.id === +JSON.parse(JSON.stringify(localStorage.getItem('tab')))) ?? this.tabsArray[0];
  }

}
