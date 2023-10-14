import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: any) {
    console.log('body', body);
  }

  @Get('/:id')
  getMessages(@Param() id: string) {
    console.log('param', id);
  }
}
