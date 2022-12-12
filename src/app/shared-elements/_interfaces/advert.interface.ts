import {AdvertTypeEnum} from "../_enums/advert-type.enum";

export interface AdvertInterface {
  name: string;
  img: string;
  price: number;
  description: string;

  isFavorite?: boolean;

  id: string;

  area: number;
  room: number;

  floor: number;
  phone: number;

  type: AdvertTypeEnum;

  userName: string;

  userEmail: string;

  userId: string;

  creation: number;
}

export enum AdvertElementType {
  select = 'select',
  input = 'input',
  textArea = 'textArea',
  img = 'img'
}
