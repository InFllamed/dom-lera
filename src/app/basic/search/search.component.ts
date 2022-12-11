import {Component} from '@angular/core';
import {CustomSelectInterface} from "../../shared-elements/_interfaces/custom-select.interface";
import {AdvertElementType} from "../../shared-elements/_interfaces/advert.interface";
import {AdvertTypeEnum} from "../../shared-elements/_enums/advert-type.enum";
import {Store} from "@ngxs/store";
import {SetCurrentFilter} from "../_store/actions/popular.actions";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchArray: { name: string, elementType: AdvertElementType, placeholder?: string, type: string, options?: CustomSelectInterface[] }[] = [
    {
      name: 'Оренда',
      elementType: AdvertElementType.select,
      type: 'type',
      options: [
        {
          key: AdvertTypeEnum.rent,
          value: 'Оренда'
        },
        {
          key: AdvertTypeEnum.sale,
          value: 'Продаж'
        },
        {
          key: AdvertTypeEnum.daily,
          value: 'Подобово'
        }
      ]
    },
    {
      name: 'Кімнат',
      placeholder: 'Кімнат',
      elementType: AdvertElementType.select,
      type: 'room',
      options: [
        {
          key: 1,
          value: '1'
        },
        {
          key: 2,
          value: '2'
        },
        {
          key: 3,
          value: '3'
        }
      ]
    },
    {
      name: 'Ціна до',
      placeholder: 'Ціна до',
      type: 'price',
      elementType: AdvertElementType.input,
    }
  ];

  advertElementType = AdvertElementType;

  updateValueData: any;

  constructor(private store: Store) {
  }

  currentOption(item, option: CustomSelectInterface): void {
    console.log(option);
    this.updateValueData = {
      ...this.updateValueData,
      [item.type]: option.key
    }
  }

  updateValue(item, value): void {
    this.updateValueData = {
      ...this.updateValueData,
      [item.type]: value
    }
  }

  filterData(): void {
    console.log(this.updateValueData);
    this.store.dispatch(new SetCurrentFilter(this.updateValueData))
  }

}
