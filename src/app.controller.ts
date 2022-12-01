import {
  Controller,
  Get,
  Header,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ForbiddenExeption } from './errors/forbidden.exeption';
import { HttpExceptionFilter } from './errors/http-exeption.filter';

@Controller('/api')
export class AppController {
  constructor(private appService: AppService) {}


  @Get()
  getAll() {
    try {
      throw new Error()
      return this.appService.getAll();
    } catch (error) {
      throw new HttpExceptionFilter()
      throw new ForbiddenExeption(error)
      // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
  }


  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: `https://docs.nestjs.com/v5/` };
    }
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }

  @Get('req')
  getReq(@Req() request: Request, @Res() response: Response) {
    console.log(request);
    return `This action returns request - ${request.method}`;
  }

  @Post()
  @Header('Cache-Control', 'no-cache, no-store, must-revalidate')
  create() {
    return 'This action adds a new cat';
  }
}
