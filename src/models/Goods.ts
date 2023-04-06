import { Expose, Type } from "class-transformer";
import Status from "./Status";

export default class Goods {
  @Expose({ name: "_id" })
  id?: number;

  price?: number;

  name: string;

  @Type(() => Status)
  status: Status[];

  description?: string;

  imgSrcs: string[];
  constructor() {}
}
