import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mockServer } from './config/mockServer';

async function bootstrap() {
  mockServer.listen();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
