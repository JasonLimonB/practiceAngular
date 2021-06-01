import { Component, OnInit } from '@angular/core';
import { DateVService } from '../../services/validations/date-v.service';

import * as moment from 'moment';

@Component({
  selector: 'app-datevalidations',
  templateUrl: './datevalidations.component.html',
  styleUrls: ['./datevalidations.component.scss'],
  providers: [ DateVService ]
})
export class DatevalidationsComponent implements OnInit {

  constructor( private _service: DateVService ) { }

  
  PlanningWEDate: Date = this._service.setWeekEndingDate(moment(new Date()).utc().toDate());
  PublishedWEDate: Date = this._service.setWeekEndingDate(moment(new Date()).add(-7, 'days').utc().toDate());

  ngOnInit(): void {
    console.log(`PlanningWEDate -> ${this.PlanningWEDate}`);
    console.log(`PublishedWEDate -> ${this.PublishedWEDate}`);
    
    
  }

}
