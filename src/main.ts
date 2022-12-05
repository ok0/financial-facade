import {NestFactory} from '@nestjs/core';
import {FpDepositModule} from './fp-deposit/fp-deposit.module';

async function bootstrap() {
  const app = await NestFactory.create(FpDepositModule);
  await app.listen(3000);
}
bootstrap();
