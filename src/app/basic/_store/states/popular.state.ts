import {Action, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {InitAdverts, SetCurrentFilter} from "../actions/popular.actions";
import {AdvertInterface} from "../../../shared-elements/_interfaces/advert.interface";
import {AngularFirestore} from "@angular/fire/compat/firestore";

export interface PopularStateModel {
  adverts: AdvertInterface[];
  currentFilter;
}

const POPULAR_STATE_TOKEN = new StateToken<PopularStateModel>('popular')

@State<PopularStateModel>({
  name: POPULAR_STATE_TOKEN,
  defaults: {
    adverts: [],
    currentFilter: null
  }
})

@Injectable()
export class PopularState {
  constructor(private db: AngularFirestore) {
  }

  @Selector()
  static getAdverts(state: PopularStateModel): AdvertInterface[] {
    console.log(state.adverts);
    return state.adverts;
  }

  @Selector()
  static getCurrentFilter(state: PopularStateModel): any {
    console.log(state.currentFilter);
    return state.currentFilter;
  }

  @Action(SetCurrentFilter)
  setCurrentFilter(ctx: StateContext<PopularStateModel>, payload: SetCurrentFilter): void {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      currentFilter: payload.data
    })
  }

  @Action(InitAdverts)
  async initAdverts(ctx: StateContext<PopularStateModel>): Promise<void> {
    const state = ctx.getState();
  }
}
