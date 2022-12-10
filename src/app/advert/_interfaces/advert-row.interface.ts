import {AdvertElementType} from "../../shared-elements/_interfaces/advert.interface";

export interface AdvertRowInterface {
  name: string;
  placeholder?: string;
  required?: boolean;
  elementType: AdvertElementType;
}
