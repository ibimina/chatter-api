import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';
import { TopicModule } from './api/topic/topic.module';
import { AuthModule } from './api/auth/auth.module';
import { AccountModule } from './api/account/account.module';
import { NotificationModule } from './api/notification/notification.module';
import { MessageModule } from './api/message/message.module';
import { FollowerModule } from './api/follower/follower.module';
import { BookmarkModule } from './api/bookmark/bookmark.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule,
    TopicModule,
    AuthModule,
    AccountModule,
    NotificationModule,
    MessageModule,
    FollowerModule,
    FollowerModule,
    BookmarkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
