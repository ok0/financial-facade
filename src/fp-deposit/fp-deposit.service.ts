import {Injectable} from '@nestjs/common';
import {FpApiClient} from 'src/libs/fp-api-client/fp-api-client';

@Injectable()
export class FpDepositService {
  constructor(private fpApiClient: FpApiClient) {}
  async findAllBySearchContext() {
    return await this.fpApiClient.findAllBySearchContext();
  }
}
