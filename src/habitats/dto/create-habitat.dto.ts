// src/habitats/dto/create-habitat.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}