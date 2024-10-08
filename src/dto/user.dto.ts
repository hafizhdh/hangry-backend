import { IsNotEmpty, IsString } from "class-validator";

export class userDataDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  dob: string
}
