import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "Role value should be a string" })
  readonly value: string;
  @IsNumber({}, { message: "User id should be a number" })
  readonly userId: number;
}