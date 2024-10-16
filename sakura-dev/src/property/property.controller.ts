import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  @Post()
  craete() {
    return 'This will create a property';
  }
}
