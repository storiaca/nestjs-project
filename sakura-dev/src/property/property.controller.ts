import { Controller, Get, Param, Post, Body, HttpCode } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return id;
  // }

  @Get(':id/:slug')
  findOne(@Param('id') id, @Param('slug') slug) {
    return `id = ${id}, slug = ${slug}`;
  }
  @Post()
  @HttpCode(202)
  create(@Body('name') name) {
    return name;
  }
}
