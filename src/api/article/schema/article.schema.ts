import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Topic } from 'src/api/topic/schema/topic.schema';
import { Like } from './like.schema';
import { Bookmark } from './bookmark.schema';

export type ArticleDocument = HydratedDocument<Article>;

@Schema({ timestamps: true })
export class Article {
  @Prop()
  uniqueId: string;
  @Prop()
  subtitle: string;
  @Prop()
  title: string;
  @Prop()
  article: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: string;
  @Prop()
  isPublished: boolean;
  @Prop()
  likesCount: string;
  @Prop()
  readingTime: string;
  @Prop()
  views: number;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }] })
  topics: Topic[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }] })
  likes: Like[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' })
  comments: Comment[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bookmark' }] })
  bookmarks: Bookmark[];
}
export const ArticleSchema = SchemaFactory.createForClass(Article);
