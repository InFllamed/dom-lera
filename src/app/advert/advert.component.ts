import {Component} from '@angular/core';
import {AdvertElementType, AdvertInterface} from "../shared-elements/_interfaces/advert.interface";
import {AdvertRowInterface} from "./_interfaces/advert-row.interface";
import {CustomSelectInterface} from "../shared-elements/_interfaces/custom-select.interface";
import {AdvertTypeEnum} from "../shared-elements/_enums/advert-type.enum";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {NgxDropzoneChangeEvent} from "ngx-dropzone";
import {Store} from "@ngxs/store";
import {AuthState} from "../app-template/store/states/auth.state";

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent {

  advertArray: AdvertRowInterface[] = [
    {
      name: 'Назва оголошення',
      type: 'name',
      elementType: AdvertElementType.input,
      placeholder: 'Введіть назву оголошення',
      required: true
    },
    {
      name: 'Тип оголошеня',
      type: 'type',
      elementType: AdvertElementType.select,
      placeholder: 'Оберіть тип оголошеня',
      required: true
    },
    {
      name: 'Зображення',
      type: 'img',
      elementType: AdvertElementType.img,
      required: false
    },
    {
      name: 'Опис оголошення',
      type: 'description',
      elementType: AdvertElementType.textArea,
      placeholder: 'Додайте опис оголошення',
      required: true
    },
    {
      name: 'Площа житла',
      type: 'area',
      elementType: AdvertElementType.input,
      placeholder: 'Укажіть площу житла',
      required: true
    },
    {
      name: 'Кількість кімнат',
      type: 'room',
      elementType: AdvertElementType.input,
      placeholder: 'Укажіть кількість кімнат',
      required: true
    },
    {
      name: 'Поверх',
      type: 'floor',
      elementType: AdvertElementType.input,
      placeholder: 'Оберіть поверх',
      required: true
    },
    {
      name: 'Ціна житла',
      type: 'price',
      elementType: AdvertElementType.input,
      placeholder: 'Вкажіть ціну житла',
      required: true
    },
    {
      name: 'Iм\'я контактної особи',
      type: 'userName',
      elementType: AdvertElementType.input,
      placeholder: 'Введіть ім\'я контактної особи',
      required: true
    },
    {
      name: 'Номер телефону',
      type: 'phone',
      elementType: AdvertElementType.input,
      placeholder: 'Вкажіть контактний номер телефону',
      required: true
    },
  ]

  advertElementType = AdvertElementType;

  advertTypeOptions: CustomSelectInterface[] = [
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
  ];

  updateDataValue: AdvertInterface;

  constructor(private db: AngularFirestore, private store: Store) {
  }

  updateValue(item: AdvertRowInterface, value: string): void {
    console.log(item, value);

    this.updateDataValue = {
      ...this.updateDataValue,
      [item.type]: value
    }
    console.log(this.updateDataValue);
  }

  async updateFileValue(item: AdvertRowInterface, event: NgxDropzoneChangeEvent): Promise<void> {
    const file = await this.getFile(event.addedFiles[0]);

    this.updateDataValue = {
      ...this.updateDataValue,
      [item.type]: file
    }
  }

  private getFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve((reader.result as string));
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);

    });
  }

  updateSelectValue(item: AdvertRowInterface, value: CustomSelectInterface): void {
    this.updateDataValue = {
      ...this.updateDataValue,
      [item.type]: value.key
    }
    console.log(this.updateDataValue);
  }

  async sendData(): Promise<void> {
    await this.db.collection('apartment').add({
      ...this.updateDataValue,
      userEmail: this.store.selectSnapshot(AuthState.getUser).email,
      userId: this.store.selectSnapshot(AuthState.getUser).uid,
      creation: Date.now()
    });
  }

}
