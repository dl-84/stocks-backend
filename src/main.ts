import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  app.setGlobalPrefix('api/');

  await app.listen(3000);
}

bootstrap();
