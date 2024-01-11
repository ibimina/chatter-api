import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import {
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/shared/http-response';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @ApiOperation({ summary: 'createAccount' })
  @Post('create-account')
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    let response: HttpResponse = null;
    const account = await this.accountService.createAccount(createAccountDto);
    if (account) {
      response = {
        message: 'Account created successfully',
        payload: account,
        status: HttpStatus.CREATED,
      };
    }
    return response;
  }
}
