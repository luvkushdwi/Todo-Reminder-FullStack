
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { get } from 'http';
import { reminderSchema } from './entity';

@Injectable()
export class ReminderService {

  constructor(
    @InjectModel(reminderSchema) private reminderschema: typeof reminderSchema) {}

  add(data) {
    console.log(data)
    return this.reminderschema.create(data);
  }


  delete(id) {
  this.reminderschema.destroy({where:{id},
  });
}


  getreminder() {

  return this.reminderschema.findAll(
  );
  }




}
