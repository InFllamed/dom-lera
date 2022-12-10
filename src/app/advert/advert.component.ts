import {Component} from '@angular/core';
import {AdvertElementType} from "../shared-elements/_interfaces/advert.interface";
import {AdvertRowInterface} from "./_interfaces/advert-row.interface";

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent {

  advertArray: AdvertRowInterface[] = [
    {
      name: 'name',
      elementType: AdvertElementType.input,
      placeholder: 'Введіть назву оголошення',
      required: true
    },
    {
      name: 'type',
      elementType: AdvertElementType.select,
      placeholder: 'Оберіть тип оголошеня',
      required: true
    },
    {
      name: 'img',
      elementType: AdvertElementType.img,
      required: false
    },
    {
      name: 'description',
      elementType: AdvertElementType.textArea,
      placeholder: 'Додайте опис оголошення',
      required: true
    },
    {
      name: 'area',
      elementType: AdvertElementType.input,
      placeholder: 'Укажіть площу житла',
      required: true
    },
    {
      name: 'room',
      elementType: AdvertElementType.input,
      placeholder: 'Укажіть кількість кімнат',
      required: true
    },
    {
      name: 'floor',
      elementType: AdvertElementType.input,
      placeholder: 'Оберіть поверх',
      required: true
    },
    {
      name: 'price',
      elementType: AdvertElementType.input,
      placeholder: 'Вкажіть ціну житла',
      required: true
    },
    {
      name: 'phone',
      elementType: AdvertElementType.input,
      placeholder: 'Вкажіть контактний номер телефону',
      required: true
    }
  ]

  advertElementType = AdvertElementType;

  constructor() {
  }

}
