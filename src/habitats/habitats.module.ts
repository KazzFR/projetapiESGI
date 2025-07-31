
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitat } from './entities/habitat.entity';
import { HabitatsController } from './habitats.controller';
import { HabitatsService } from './habitats.service';

@Module({
  
  imports: [TypeOrmModule.forFeature([Habitat])],
  controllers: [HabitatsController],
  providers: [HabitatsService],
})
export class HabitatsModule {}