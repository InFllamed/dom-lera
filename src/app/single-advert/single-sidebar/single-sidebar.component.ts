import {Component} from '@angular/core';
import {Select} from "@ngxs/store";
import {AdvertState} from "../../advert/_store/states/advert.state";
import {Observable} from "rxjs";
import {AdvertInterface} from "../../shared-elements/_interfaces/advert.interface";

@Component({
  selector: 'app-single-sidebar',
  templateUrl: './single-sidebar.component.html',
  styleUrls: ['./single-sidebar.component.scss']
})
export class SingleSidebarComponent {

  @Select(AdvertState.getCurrentAdvert) currentAdvert$: Observable<AdvertInterface>;

  constructor() {
  }

}
