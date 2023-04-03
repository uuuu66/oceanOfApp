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

  get getImgSrc() {
    return this.imgSrc;
  }

  get getDate() {
    return [this.from, this.to];
  }

  get getDescription() {
    return this.description;
  }

  get getLinkTo() {
    if (this.linkTo) return this.linkTo;
    return undefined;
  }
}
