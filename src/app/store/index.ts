import {navState} from "../app-template/store";
import {advertState} from "../advert/_store";
import {popularState} from "../basic/_store";

export const stateList = [
  ...navState,
  ...advertState,
  ...popularState
]
