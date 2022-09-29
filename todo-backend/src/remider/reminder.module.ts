import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { reminderSchema } from './entity';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';



@Module({
  imports:[ SequelizeModule.forFeature([reminderSchema])],
  
  controllers: [ReminderController],
  providers: [ReminderService],
})
export class ReminderModule {}
