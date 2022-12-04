import {Selector, State, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {NavArrayInterface} from "../../nav/_interfaces/nav-array.interface";

export interface NavStateModel {
  navArray: {name: string, link?: string}[]
}

const NAV_STATE_TOKEN = new StateToken<NavStateModel>('nav');

const navArray: NavArrayInterface[] = [
  {
    name: 'Оренда'
  },
  {
    name: 'Продаж'
  },
  {
    name: 'Подобово'
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
