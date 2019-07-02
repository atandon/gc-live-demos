import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggService {

  constructor() { }

  saysomething() {
    alert(1);
  }
}
