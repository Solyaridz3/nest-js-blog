import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: "NASA launched new rocket", description: "Post title" })
  readonly title: string;
  @ApiProperty({ example: "Today February 5 was...", description: "Post content" })
  readonly content: string;
  @ApiProperty({ example: 3 })
  readonly userId: number;
}