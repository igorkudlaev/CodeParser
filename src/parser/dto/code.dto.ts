import { IsNotEmpty, IsString } from 'class-validator';

export default class CodeDto {
  @IsNotEmpty()
  @IsString()
  code: string;
}
