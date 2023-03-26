import User from "@/models/User";

export interface SignInRequestDto {
  phoneNumber: string;
  password: string;
}

export interface SignInResponseDto extends Omit<User, "password"> {}
