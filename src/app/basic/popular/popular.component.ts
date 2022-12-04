import {Component, OnInit} from '@angular/core';
import {FilterTypePipeEnum} from "../../shared-elements/_enums/filter-type-pipe.enum";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  tabsArray: { name: string, id: number }[] = [
    {
      name: 'Оренда',
      id: 1
    },
    {
      name: 'Продаж',
      id: 2
    },
    {
      name: 'Подобово',
      id: 3
    }
  ];

  blockArray: { name: string, img: string, m2: string, price: string, description: string, id: number }[] = [
    {
      name: 'test1',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 1
    },
    {
      name: 'test2',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 2
    },
    {
      name: 'test1',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 1
    },
    {
      name: 'test3',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 3
    },
    {
      name: 'test2',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 2
    },
    {
      name: 'test1',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 1
    },
    {
      name: 'test3',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 3
    },
    {
      name: 'test3',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 3
    },
    {
      name: 'test3',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 3
    },
    {
      name: 'test2',
      img: 'https://www.country.ua/img_wepb_to_jpg.php?file=https://storage.googleapis.com/countryua_webp_2022/phot_webp_6374d551457fd.webp',
      m2: '64',
      price: '20000',
      description: 'Київ, Солом\'янський район, Шулявка, бул. Вацлава Гавела (Лепсе Ивана), 6Б',
      id: 2
    },
  ];

  blockArray$: Observable<any>

  currentTab: { name: string, id: number };

  filterTypePipeEnum = FilterTypePipeEnum;

  constructor(private db: AngularFirestore) {
    // db.collection('apartment').add({...this.blockArray});
    // db.collection('apartment').valueChanges().subscribe(data => {
    //   console.log(data);
    // })
  }

  openTab(tab: { name: string, id: number }): void {
    this.currentTab = tab;
    localStorage.setItem('tab', JSON.stringify(tab.id));
  }

  async ngOnInit(): Promise<void> {
    // this.blockArray$ = this.db.collection('apartment').valueChanges();
    this.currentTab = this.tabsArray.find(f => f.id === +JSON.parse(JSON.stringify(localStorage.getItem('tab')))) ?? this.tabsArray[0];
  }

}
