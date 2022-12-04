import { Component } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {NavState} from "../store/states/nav.state";
import {Observable} from "rxjs";
import {NavArrayInterface} from "./_interfaces/nav-array.interface";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Select(NavState.getNavArray) navArray$: Observable<NavArrayInterface[]>;
  constructor() {
  }

}
