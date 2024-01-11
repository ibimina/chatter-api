import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { hashPassword } from 'src/shared/utils';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schema/account.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
    private readonly userService: UserService,
  ) {}
  async createAccount(createAccountDto: CreateAccountDto) {
    try {
      const { username, email, password, photoUrl } = createAccountDto;
      const passwordEn = hashPassword(password);
      const account = new this.accountModel({
        username,
        email,
        password: passwordEn,
      });
      if (account) {
        await this.userService.createUser({ username, photoUrl });
        return account.save();
      }
    } catch (error) {}
  }
}
