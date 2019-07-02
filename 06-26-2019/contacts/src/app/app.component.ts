import { Component } from '@angular/core';
import { LoggService } from './logg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
});

export class AppComponent {
  title = 'contactapp2';
  name = "Ajay Tandon";

  contacts = [
    {
      name: "Jim",
      phoneNum: "2222222222"
    },
    {
      name: "John"
    },
    {
      name: "James"
    }
  ];

  private logger : LoggService;

  showAnAlert(val) {
    alert(val);
  }

  constructor(logger : LoggService) {
    this.logger = logger;
    logger.saysomething();

  }
}
