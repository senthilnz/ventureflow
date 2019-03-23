import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-table-card',
  styleUrls: ['./table-card.component.scss'],
  templateUrl: './table-card.component.html',
})
export class TableCardComponent {
  @HostBinding('class.projects-table') private readonly projectsTable = true;

  private tableHeader: string[] = [
    'Project',
    'Responsible',
    'Client contact',
    'Deadline',
    'Progress',
  ];
  private data: object[] = [
    {
      project: 'Darkboard',
      responsible: [
        {
          color: 'color--light-blue',
          name: 'Minion',
        },
        {
          color: 'background-color--primary',
          name: 'Dina',
        },
        {
          color: 'color--orange',
          name: 'Alan',
        },
      ],
      email: 'ran@mymail.com',
      deadline: 'Jun 15',
      progress: 44,
      isSelected: false,
    },
    {
      project: 'Big financial app',
      responsible: [
        {
          color: 'color--orange',
          name: 'Vlada',
        },
      ],
      email: 'Boss@financial.com',
      deadline: 'Mar 1',
      progress: 14,
      isSelected: true,
    },
    {
      project: 'Green Tech',
      responsible: [
        {
          color: 'background-color--primary',
          name: 'Dora',
        },
        {
          color: 'color--orange',
          name: 'Klar',
        },
      ],
      email: 'info@greentech.com',
      deadline: 'Dec 25',
      progress: 100,
      isSelected: false,
    },
  ];
}
