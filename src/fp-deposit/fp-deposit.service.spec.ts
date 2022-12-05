import {Test, TestingModule} from '@nestjs/testing';
import {FpDepositService} from './fp-deposit.service';

describe('FpDepositService', () => {
  let service: FpDepositService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FpDepositService],
    }).compile();

    service = module.get<FpDepositService>(FpDepositService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
