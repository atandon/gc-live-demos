import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient : HttpClient) {
  }

  getTodo(f) {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(f);
  }

}
