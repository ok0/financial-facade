import {Test, TestingModule} from '@nestjs/testing';
import {FpApiClient} from './fp-api-client';

describe('FtApiClientService', () => {
  let service: FpApiClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FpApiClient],
    }).compile();

    service = module.get<FpApiClient>(FpApiClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
