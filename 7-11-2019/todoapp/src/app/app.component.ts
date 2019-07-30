import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  items : string[] = ["apple", "oranges", "pears"]

  getstuff(t) {
    alert(t);
  }
}
