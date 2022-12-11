import {Action, Selector, State, StateContext, StateToken} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SetCurrentFilter} from "../actions/popular.actions";

export interface PopularStateModel {
  currentFilter;
}

const POPULAR_STATE_TOKEN = new StateToken<PopularStateModel>('popular')

@State<PopularStateModel>({
  name: POPULAR_STATE_TOKEN,
  defaults: {
    currentFilter: null
  }
})

@Injectable()
export class PopularState {
  constructor() {
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
}
