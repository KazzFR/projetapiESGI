// src/habitats/habitats.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitat } from './entities/habitat.entity';
import { CreateHabitatDto } from './dto/create-habitat.dto';

@Injectable()
export class HabitatsService {
  constructor(
    @InjectRepository(Habitat)
    private readonly habitatRepo: Repository<Habitat>,
  ) {}

  create(dto: CreateHabitatDto) {
    const habitat = this.habitatRepo.create(dto);
    return this.habitatRepo.save(habitat);
  }

  findAll() {
    return this.habitatRepo.find();
  }

  findOne(id: number) {
    return this.habitatRepo.findOneBy({ id });
  }
}