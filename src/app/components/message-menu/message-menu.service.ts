import { Injectable } from '@angular/core';

@Injectable()
export class MessageMenuService {
  public getMessages(): object[] {
    return [
      {
        name: 'Konnon',
        type: 'Investor meet',
        time: 'just now',
        icon: 'A',
        color: 'primary',
      },
    ];
  }
}
