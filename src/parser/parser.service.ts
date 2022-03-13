import { Injectable } from '@nestjs/common';
import * as vm from 'vm';

@Injectable()
export class ParserService {
  async execute(code: string): Promise<any> {
    const context = {};
    vm.createContext(context);

    vm.runInContext(code, context);

    return context;
  }
}
