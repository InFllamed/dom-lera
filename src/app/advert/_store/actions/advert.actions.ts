import {AdvertInterface} from "../../../shared-elements/_interfaces/advert.interface";

export class UpdateAdvert {
  static readonly type = '[Advert] UpdateAdvert';

  constructor(public data: AdvertInterface) {
  }

}
