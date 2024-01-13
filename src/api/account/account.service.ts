import { BadRequestException, Injectable } from '@nestjs/common';
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
  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    try {
      let account;
      const session = await this.connection.startSession();
      await session.withTransaction(async () => {
        const { username, email, password, photoUrl } = createAccountDto;
        const oldAccount = await this.accountModel.findOne({ email });
        if (oldAccount) {
          throw new BadRequestException(
            `An account with this email already exists, kindly change your email`,
          );
        }
        const passwordEn = hashPassword(password);
        account = new this.accountModel({
          username,
          email,
          password: passwordEn,
        });
        account.save();
        await this.userService.createUser({ username, photoUrl }, session);
        account.password = undefined;
      });
      session.endSession();
      return account;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
