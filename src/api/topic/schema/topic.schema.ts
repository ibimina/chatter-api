import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopicDocument = HydratedDocument<Topic>;

@Schema({ timestamps: true })
export class Topic {
  @Prop()
  uniqueId: string;
  @Prop()
  name: string;
  @Prop()
  count: number;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
