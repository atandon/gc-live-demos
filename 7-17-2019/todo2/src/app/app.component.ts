import { Component } from '@angular/core';
import { RequestsService } from './requests.service';

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  task : Task;

  constructor(private requestsService : RequestsService) {
    this.requestsService.getTodo(item => {
      this.task = item;
    });
  }
}
