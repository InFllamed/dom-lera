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
    if (!value || !comparedValue) {
      return;
    }
    console.log(comparedValue);
    if (comparedValue.currentTab) {
      return value.filter(f => +f.type === +comparedValue.currentTab.id);
    }

    if (comparedValue.type) {
      value = value.filter(f => f.type === comparedValue.type);
    }

    if (comparedValue.price) {
      value = value.filter(f => +f.price <= +comparedValue.price);
    }

    if (comparedValue.room) {
      value = value.filter(f => +f.room === +comparedValue.room);
    }

    return value;
  }

}
