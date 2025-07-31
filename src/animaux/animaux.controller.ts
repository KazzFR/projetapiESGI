// animaux.controller.ts
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { Animal } from './entities/animal.entity';

@ApiTags('animaux')
@Controller('animaux')
export class AnimauxController {
  constructor(private readonly service: AnimauxService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel animal' })
  @ApiResponse({ status: 201, description: 'L\'animal a été créé.', type: Animal })
  create(@Body() dto: CreateAnimalDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtenir la liste de tous les animaux' })
  @ApiResponse({ status: 200, description: 'Liste des animaux.', type: [Animal] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obtenir un animal par son ID' })
  @ApiResponse({ status: 200, description: 'Détails de l\'animal.', type: Animal })
  @ApiResponse({ status: 404, description: 'Animal non trouvé.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('gardien')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Supprimer un animal (role gardien requis)' })
  @ApiResponse({ status: 200, description: 'Animal supprimé.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  @Get('soigner/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('veterinaire')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Soigner un animal (role veterinaire requis)' })
  @ApiResponse({ status: 200, description: 'Animal soigné.', type: Animal })
  soignerAnimal(@Param('id', ParseIntPipe) id: number) {
    return this.service.soignerAnimal(id);
  }
}