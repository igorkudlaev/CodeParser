import { Body, Controller, Post } from '@nestjs/common';
import CodeDto from './dto/code.dto';
import { ParserService } from './parser.service';

@Controller('parser')
export class ParserController {
  constructor(private paserService: ParserService) {}

  @Post('/parse')
  parse(@Body() codeDto: CodeDto): Promise<any> {
    return this.paserService.execute(codeDto.code);
  }
}
