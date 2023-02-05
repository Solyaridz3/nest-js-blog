import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@gmail.com", description: "User email" })
  @IsString({ message: "Email should be a string" })
  @IsEmail({}, { message: "Incorrect email address" })
  readonly email: string;

  @ApiProperty({ example: "password123123", description: "User password" })
  @IsString({ message: "Password should be a string" })
  @Length(6, 16, { message: "Password should be not less than 6 and not more than 16 symbols" })
  readonly password: string;
}