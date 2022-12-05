import {Test, TestingModule} from '@nestjs/testing';
import {FpDepositController} from './fp-deposit-v1.controller';

describe('FpDepositController', () => {
  let controller: FpDepositController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FpDepositController],
    }).compile();

    controller = module.get<FpDepositController>(FpDepositController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
