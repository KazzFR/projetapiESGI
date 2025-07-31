import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimauxModule } from './animaux/animaux.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { HabitatsModule } from './habitats/habitats.module';
import { Animal } from './animaux/entities/animal.entity';
import { Habitat } from './habitats/entities/habitat.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // On indique explicitement le fichier .env
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConfig = {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          // On s'assure que le port est bien un nombre
          port: parseInt(configService.get<string>('DB_PORT'), 10), 
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          entities: [Animal, Habitat],
          synchronize: true,
        };
        // Notre log de débogage
        console.log('--- Configuration de la base de données utilisée ---');
        console.log(dbConfig);
        console.log('--------------------------------------------------');
        
        // La correction est d'ajouter "as any" ici
        return dbConfig as any; 
      },
      inject: [ConfigService],
    }),
    AnimauxModule,
    AuthModule,
    HabitatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}