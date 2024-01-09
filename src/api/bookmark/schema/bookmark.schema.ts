import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Article } from 'src/api/article/schema/article.schema';

export type BookmarkDocument = HydratedDocument<Bookmark>;

@Schema({ timestamps: true })
export class Bookmark {
  @Prop()
  uniqueId: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Article' })
  article: Article;
}
export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
