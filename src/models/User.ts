import { Expose } from "class-transformer";

export default class User {
  @Expose({ name: "_id" })
  id: number;

  nickname: string;

  phoneNumber: string;

  email: string;

  name: string;

  gender: string;

  introduction: string;

  loggedInAt: string;

  feeling: string;

  password: string;
}
