// src/animaux/entities/animal.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Lion', description: 'Le nom de l\'animal' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Félin', description: 'L\'espèce de l\'animal' })
  @Column()
  species: string;

  @ApiProperty({ example: 100, description: 'La santé de l\'animal' })
  @Column({ type: 'int', default: 100 })
  health: number;
}