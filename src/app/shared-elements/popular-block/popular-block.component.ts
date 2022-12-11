import {Component, Input} from '@angular/core';
import {FilterTypePipeEnum} from "../_enums/filter-type-pipe.enum";
import {SetAdvert} from "../../advert/_store/actions/advert.actions";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent {

  @Input() items;
  @Input() currentTab;

  filterTypePipeEnum = FilterTypePipeEnum;

  constructor(private store: Store, private router: Router) {
  }

  async moveTo(item): Promise<void> {
    await this.store.dispatch(new SetAdvert(item)).toPromise();
    await this.router.navigate(['single']);
  }

}
