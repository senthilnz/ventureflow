import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {
  public getDaySchedule() {
    return [
      {
        key: 'FinTech',
        hours: 9,
      },
      {
        key: 'Green Firms',
        hours: 3,
      },
      {
        key: 'Girls Education',
        hours: 3,
      },
      {
        key: 'Rain Forest',
        hours: 3,
      },
      {
        key: 'Others',
        hours: 6,
      },
    ];
  }
}
