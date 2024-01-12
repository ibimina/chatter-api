import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { hashPassword } from 'src/shared/utils';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schema/account.schema';
import { UserService } from '../user/user.service';
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    private readonly userService: UserService,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}
  async createAccount(createAccountDto: CreateAccountDto) {
    try {
      //add transaction
      const session = await this.connection.startSession();

      await session.withTransaction(async () => {
        const { username, email, password, photoUrl } = createAccountDto;
        const passwordEn = hashPassword(password);
        const account = new this.accountModel({
          username,
          email,
          password: passwordEn,
        });
        await this.userService.createUser({ username, photoUrl }, session);
        return account.save();
      });
      session.endSession();
    } catch (error) {}
  }
}
