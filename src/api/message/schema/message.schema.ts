import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
import { Conversation } from './conversation.schema';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop()
  uniqueId: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  participants: User[];
  @Prop()
  messages: Conversation[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sentby: User;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  receviedby: User;
  @Prop()
  message: string;
}
export const MessageSchema = SchemaFactory.createForClass(Message);
