import 'dotenv/config';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from 'app.controller';
import { FilterMiddleware } from 'middleware/filter';
import { AppService } from 'app.service';
import { LinkModule } from 'links/links.module';
import { UserModule } from './users/users.module';
import { attachUser } from './middleware/user';

const { MONGO_URI } = process.env;
@Module({
  imports: [LinkModule, UserModule, MongooseModule.forRoot(MONGO_URI, { useNewUrlParser: true} )],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(attachUser, FilterMiddleware)
      .forRoutes('links');
  }
}