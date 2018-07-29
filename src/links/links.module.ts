import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkSchema } from './schemas/links.schemas';
import { LinksController } from './links.controller';
import { LinkService } from './links.services';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Links', schema: LinkSchema}])],
  controllers: [LinksController],
  providers: [LinkService],
})

export class LinkModule {}
