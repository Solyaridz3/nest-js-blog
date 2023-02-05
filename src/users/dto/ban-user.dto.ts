import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
  @IsNumber({}, { message: "User id should be a number" })
  readonly userId: number;
  @IsString({ message: "Ban reason should be a string" })
  readonly banReason: string;
}