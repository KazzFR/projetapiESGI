// src/habitats/entities/habitat.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Habitat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Savane', description: 'Le nom de l\'habitat' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Un grand espace ouvert avec des herbes hautes.', description: 'Description de l\'habitat' })
  @Column()
  description: string;
}