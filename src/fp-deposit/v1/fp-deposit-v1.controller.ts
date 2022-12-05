import {Controller, Get} from '@nestjs/common';
import {FpDepositService} from '../fp-deposit.service';

@Controller('v1/fp-deposit')
export class FpDepositController {
  constructor(private ftDepositService: FpDepositService) {}

  @Get()
  async findAllBySearchContext() {
    return await this.ftDepositService.findAllBySearchContext();
  }
}
