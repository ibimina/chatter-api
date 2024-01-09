import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account {
  @Prop()
  mobile: string;
  @Prop()
  email: string;
  @Prop()
  uniqueId: string;
  @Prop()
  password: string;
  @Prop()
  isActive: boolean;
  @Prop()
  isEmailVerifed: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const AccountSchema = SchemaFactory.createForClass(Account);
