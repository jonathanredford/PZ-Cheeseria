import { Module } from '@nestjs/common';
import { CheesesService } from './cheeses.service';
import { CheesesController } from './cheeses.controller';

@Module({
  controllers: [CheesesController],
  providers: [CheesesService]
})
export class CheesesModule {}
