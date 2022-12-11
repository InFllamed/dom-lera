import {Pipe, PipeTransform} from '@angular/core';
import {FilterPipeArgsInterface} from "../_interfaces/filter-pipe-args.interface";
import {FilterTypePipeEnum} from "../_enums/filter-type-pipe.enum";

@Pipe({
  name: 'filterBySmth'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: FilterPipeArgsInterface, data?: any): any[] {
    if (!args.type) {
      return value;
    }

    switch (args.type) {
      case FilterTypePipeEnum.popular:
        return this.filterByPopular(value, args.comparedValue);
    }
  }

  private filterByPopular(value, comparedValue: any): any[] {
    if (!value) {
      return;
    }
    console.log(value);
    return value.filter(f => f.type === comparedValue.id);
  }

}
