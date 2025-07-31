// src/habitats/habitats.controller.ts
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { HabitatsService } from './habitats.service';
import { CreateHabitatDto } from './dto/create-habitat.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Habitat } from './entities/habitat.entity';

@ApiTags('habitats')
@Controller('habitats')
export class HabitatsController {
  constructor(private readonly habitatsService: HabitatsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel habitat' })
  @ApiResponse({ status: 201, description: 'L\'habitat a été créé.', type: Habitat })
  create(@Body() createHabitatDto: CreateHabitatDto) {
    return this.habitatsService.create(createHabitatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtenir la liste de tous les habitats' })
  @ApiResponse({ status: 200, description: 'Liste des habitats.', type: [Habitat] })
  findAll() {
    return this.habitatsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un habitat par son ID' })
  @ApiResponse({ status: 200, description: 'Détails de l\'habitat.', type: Habitat })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.habitatsService.findOne(id);
  }
}