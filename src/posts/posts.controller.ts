import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Posts")
@Controller("posts")
export class PostsController {

  constructor(private postService: PostsService) {
  }

  @ApiOperation({ summary: "Create post" })
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(
    @Body() dto: CreatePostDto,
    @UploadedFile() image
  ) {
    return this.postService.create(dto, image);
  }
}
