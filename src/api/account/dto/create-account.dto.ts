import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  username: string;
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  photoUrl: string;
}
