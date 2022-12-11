import {AdvertInterface} from "../../../shared-elements/_interfaces/advert.interface";
import {Action, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {UpdateAdvert} from "../actions/advert.actions";

export interface AdvertStateModel {
  advert: AdvertInterface;
}

const ADVERT_STATE_TOKEN = new StateToken<AdvertStateModel>('advert')

@State<AdvertStateModel>({
  name: ADVERT_STATE_TOKEN,
  defaults: {
    advert: null
  }
})

@Injectable()
export class AdvertState {
  constructor() {
  }

  @Selector()
  static getAdvertValue(state: AdvertStateModel): AdvertInterface {
    console.log(state.advert);
    return state.advert;
  }

  @Action(UpdateAdvert)
  updateAdvert(ctx: StateContext<AdvertStateModel>, payload: UpdateAdvert): void {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      advert: payload.data
    })
  }
}
