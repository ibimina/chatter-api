import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Article } from 'src/api/article/schema/article.schema';
import { User } from 'src/api/user/schema/user.schema';

export type NotificationDocument = HydratedDocument<Notification>;

@Schema({ timestamps: true })
export class Notification {
  @Prop()
  uniqueId: string;
  @Prop()
  event: string;
  @Prop()
  isread: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Article' })
  article: Article;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const NotificationSchema = SchemaFactory.createForClass(Notification);
