import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';

export type FollowerDocument = HydratedDocument<Follower>;

@Schema({ timestamps: true })
export class Follower {
  @Prop()
  uniqueId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const FollowerSchema = SchemaFactory.createForClass(Follower);
