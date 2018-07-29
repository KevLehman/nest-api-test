import { Controller, Get, Req, UseGuards, Put, Param } from '@nestjs/common';
import { LinkService } from './links.services';
import { LinkInterface } from './interface/link.interface';
import { AuthGuard } from '../auth/auth.guard';

@Controller('links')
@UseGuards(AuthGuard)
export class LinksController {
  constructor(private readonly linkService: LinkService) {}
  @Get()
  findAll(@Req() req) {
    return this.linkService.findAll(req.filter, req.params);
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return this.linkService.findOne(id);
  }
}
