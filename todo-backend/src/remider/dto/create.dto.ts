import { IsString } from 'class-validator';
export class CreateDto {

    @IsString()
    ReminderMsg: string;
    @IsString()
    ReminderAt: string;
    @IsString()
    IsReminded: string;

} 