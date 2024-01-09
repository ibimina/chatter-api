import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Article } from 'src/api/article/schema/article.schema';
import { Bookmark } from 'src/api/bookmark/schema/bookmark.schema';
import { Follower } from 'src/api/follower/schema/follower.schema';
import { Following } from 'src/api/following/schema/following.schema';
import { Message } from 'src/api/message/schema/message.schema';
import { Topic } from 'src/api/topic/schema/topic.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  uniqueId: string;
  @Prop()
  username: string;
  @Prop()
  firstName: string;
  lastName: string;
  @Prop()
  isActive: boolean;
  @Prop()
  isVerified: boolean;
  @Prop()
  bio: string;
  @Prop()
  email: string;
  @Prop()
  location: string;
  @Prop()
  photoURL: string;
  @Prop()
  profileTagline: string;
  @Prop()
  twitterUrl: string;
  @Prop()
  websiteUrl: string;
  @Prop()
  youtubeUrl: string;
  @Prop()
  facebookUrl: string;
  @Prop()
  githubUrl: string;
  @Prop()
  instagramUrl: string;
  @Prop()
  linkedinUrl: string;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }] })
  topics: Topic[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }] })
  articles: Article[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bookmark' }] })
  bookmarks: Bookmark[];
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
  })
  notifications: Notification[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] })
  messages: Message[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Followers' }] })
  followers: Follower[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Following' }] })
  followings: Following[];
}

export const UserSchema = SchemaFactory.createForClass(User);
