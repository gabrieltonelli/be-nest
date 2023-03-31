import { Module } from '@nestjs/common';
import { AmbitsService } from './ambits.service';
import { AmbitsController } from './ambits.controller';

@Module({
  controllers: [AmbitsController],
  providers: [AmbitsService]
})
export class AmbitsModule {}
