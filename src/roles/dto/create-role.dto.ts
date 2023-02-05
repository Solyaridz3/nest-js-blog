import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "ADMIN", description: "Role name" })
  readonly value: string;

  @ApiProperty({ example: "ADMIN permissions", description: "Role description" })
  readonly description: string;
}