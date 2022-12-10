import {Component} from '@angular/core';
import {CustomSelectInterface} from "../../shared-elements/_interfaces/custom-select.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchArray: { name: string, options: CustomSelectInterface[] }[] = [
    {
      name: 'Оренда',
      options: [
        {
          key: 1,
          value: 'Оренда'
        },
        {
          key: 2,
          value: 'Кімнат'
        },
        {
          key: 3,
          value: 'Ціна до'
        }
      ]
    },
    {
      name: 'Кімнат',
      options: [
        {
          key: '',
          value: 'Продаж'
        }
      ]
    },
    {
      name: 'Ціна до',
      options: [
        {
          key: '',
          value: 'Продаж'
        }
      ]
    }
  ]

  constructor() {
  }

  currentOption(option: CustomSelectInterface): void {
    console.log(option);
  }

}
