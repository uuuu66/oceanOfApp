import { Exclude, Expose, Type } from "class-transformer";

export default class Category {
  @Expose({ name: "_id" })
  id: string;

  @Exclude()
  name: string;

  @Exclude()
  imgsrc: string;

  @Exclude()
  @Type(() => Category)
  parentCategory: Category;

  get getParent(): Category | null {
    return this.parentCategory || null;
  }
  get getName(): string {
    return this.name;
  }
  get getImgSrc(): string {
    return this.imgsrc;
  }
}
