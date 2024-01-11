import { HttpStatus } from '@nestjs/common';

export class HttpResponse {
  message: string;
  payload: any;
  status: HttpStatus;
}
