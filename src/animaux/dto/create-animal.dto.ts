// src/animaux/dto/create-animal.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  species: string;
}