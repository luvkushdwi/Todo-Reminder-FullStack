import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { reminderSchema } from './entity';
import { ReminderService } from './reminder.service';


@Controller()
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

@Get('/getAll')
  get() {
    return this.reminderService.getreminder();
  }
  @Post('/addReminder')
  addreminder(@Body() data: CreateDto) {
    return this.reminderService.add(data);
  } 
  
  @Post(':id')
  deletereminder(@Param('id') id:string){
    return this.reminderService.delete(id);
  }
}
