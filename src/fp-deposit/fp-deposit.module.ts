import {Module} from '@nestjs/common';
import {FpApiClient} from 'src/libs/fp-api-client/fp-api-client';
import {FpDepositService} from './fp-deposit.service';
import {FpDepositController} from './v1/fp-deposit-v1.controller';

@Module({
  imports: [],
  controllers: [FpDepositController],
  providers: [FpDepositService, FpApiClient],
})
export class FpDepositModule {}
