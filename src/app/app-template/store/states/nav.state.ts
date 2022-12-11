import {Selector, State, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {NavArrayInterface} from "../../nav/_interfaces/nav-array.interface";
import {AdvertTypeEnum} from "../../../shared-elements/_enums/advert-type.enum";

export interface NavStateModel {
  navArray: NavArrayInterface[]
}

const NAV_STATE_TOKEN = new StateToken<NavStateModel>('nav');

const navArray: NavArrayInterface[] = [
  {
    name: 'Оренда',
    value: AdvertTypeEnum.rent
  },
  {
    name: 'Продаж',
    value: AdvertTypeEnum.sale
  },
  {
    name: 'Подобово',
    value: AdvertTypeEnum.daily
  }
]

@State<NavStateModel>({
  name: NAV_STATE_TOKEN,
  defaults: {
    navArray: navArray
  }
})

@Injectable()
export class NavState {
  constructor() {
  }

  @Selector()
  static getNavArray(state: NavStateModel): NavArrayInterface[] {
    return state.navArray;
  }
}
