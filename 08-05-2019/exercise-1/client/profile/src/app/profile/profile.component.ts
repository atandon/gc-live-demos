import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user : User;

  constructor(private httpClient : HttpClient) { 
    this.httpClient.get<User>("http://localhost:8010").subscribe(u => {
      this.user = u;
    });
  }

  ngOnInit() {
  }

}
