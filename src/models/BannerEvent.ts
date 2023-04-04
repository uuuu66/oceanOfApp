import { Exclude, Expose } from "class-transformer";

export default class BannerEvent {
  @Expose({ name: "_id" })
  id: string;

  @Exclude()
  imgSrc: string;

  @Exclude()
  from: string;

  @Exclude()
  to: string;

  @Exclude()
  description: string;

  @Exclude()
  linkTo?: string;

  constructor() {}
}
