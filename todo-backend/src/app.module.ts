import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReminderModule } from './remider/reminder.module';


@Module({
  imports:
  
  [ReminderModule ,
  SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      autoLoadModels:true,
      
  
      
    
    })
  ],
  controllers:[AppController],
  providers: [AppService],
})
export class AppModule {}
