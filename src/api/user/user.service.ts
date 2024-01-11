import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(createUserDto: CreateUserDto) {
    try {
      const { username, photoUrl } = createUserDto;
      const user = new this.userModel({
        username,
        photoUrl,
      });
      return user.save();
    } catch (error) {}
  }
}
