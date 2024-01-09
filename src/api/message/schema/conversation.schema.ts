import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema({ timestamps: true })
export class Conversation {
  @Prop()
  uniqueId: string;
  @Prop()
  conversation: {
    to: {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'User';
    };
    from: {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'User';
    };
    message: string;
    createdAt: Date;
  };
}
export const ConversationSchema = SchemaFactory.createForClass(Conversation);
