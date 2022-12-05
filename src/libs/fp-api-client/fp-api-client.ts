import {Injectable} from '@nestjs/common';
import axios, {AxiosInstance} from 'axios';
import {FpDepositDto} from './dto/fp-deposit.dto';

@Injectable()
export class FpApiClient {
  private client: AxiosInstance;

  constructor() {
    //todo inject
    this.client = axios.create({
      baseURL: process.env.FINANCIAL_API_URL ?? 'http://localhost:8080',
      timeout: Number(process.env.FINANCIAL_API_TIMEOUT) ?? 10,
    });
  }

  async findAllBySearchContext() {
    const response = await this.client.get<FpDepositDto>(`/v1/deposits`);
    return response.data;
  }
}
