import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  info(message : string) : void {
    console.log(message + " " + new Date());
  }
}
