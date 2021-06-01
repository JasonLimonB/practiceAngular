import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateVService {
  constructor() { }

  public setWeekEndingDate( date: Date ): any {
    const currentDay = date.getDay();
    switch (currentDay) {
      case 0:
        return moment(date).add(13, 'days').toDate();
      case 1:
        return moment(date).add(12, 'days').toDate();
      case 2:
        return moment(date).add(11, 'days').toDate();
      case 3:
        return moment(date).add(10, 'days').toDate();
      case 4:
        return moment(date).add(9, 'days').toDate();
      case 5:
        return moment(date).add(15, 'days').toDate();
      case 6:
        return moment(date).add(14, 'days').toDate();
    }
  }

}
