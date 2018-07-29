import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LinkInterface as Link } from './interface/link.interface';
import { CreateLinkDto } from './dto/create-link.dto';

@Injectable()
export class LinkService {
  constructor(@InjectModel('Links') private readonly linkModel: Model<Link>) {}
  async findAll(filter, pagination): Promise<Link[]> {
    return await this.linkModel.find(filter).skip(pagination.skip).limit(pagination.limit).sort({ createdAt: 1}).exec();
  }
  async findOne(_id): Promise<Link> {
    return await this.linkModel.findOne({ _id }).exec();
  }
}