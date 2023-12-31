import { Controller, Post } from '@nestjs/common';
import { CalendarsService } from './calendars.service';

@Controller('calendars')
export class CalendarsController {
  constructor(private readonly calendarsService: CalendarsService) {}

  @Post()
  create() {
    return this.calendarsService.create();
  }
}
