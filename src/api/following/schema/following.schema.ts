import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';

export type FollowingDocument = HydratedDocument<Following>;

@Schema({ timestamps: true })
export class Following {
  @Prop()
  uniqueId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const FollowingSchema = SchemaFactory.createForClass(Following);
