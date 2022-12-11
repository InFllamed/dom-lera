import {AdvertElementType} from "../../shared-elements/_interfaces/advert.interface";

export interface AdvertRowInterface {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  elementType: AdvertElementType;
}
