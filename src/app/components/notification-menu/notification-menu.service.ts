import { Injectable } from '@angular/core';

@Injectable()
export class NotificationMenuService {
  public getNotifications(): object[] {
    return [
      {
        text: 'You have 3 new orders.',
        time: 'just now',
        icon: 'plus_one',
        color: 'primary',
      }, {
        text: 'Early stage Startups New',
        time: '1 min',
        icon: 'error_outline',
        color: 'secondary',
      }, {
        text: 'Established startups ',
        time: '2 hours',
        icon: 'new_releases',
        color: 'primary',
      },
    ];
  }
}
