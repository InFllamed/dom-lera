import {FilterTypePipeEnum} from "../_enums/filter-type-pipe.enum";

export interface FilterPipeArgsInterface {
  type: FilterTypePipeEnum;
  comparedValue?: any;
  data?: any;
}
