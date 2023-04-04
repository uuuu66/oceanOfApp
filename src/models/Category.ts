import { Exclude, Expose, Type } from "class-transformer";

export default class Category {
  @Expose({ name: "_id" })
  id: string;

  @Exclude()
  name: string;

  @Exclude()
  imgSrc: string;

  @Exclude()
  @Type(() => Category)
  parentCategory?: Category;
}
