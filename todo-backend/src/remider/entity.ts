import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class reminderSchema extends Model {

  @Column(DataType.STRING)
  ReminderMsg: string;

  @Column(DataType.STRING)
  ReminderAt: string;

  @Column(DataType.BOOLEAN)
  IsReminded: false;


}
