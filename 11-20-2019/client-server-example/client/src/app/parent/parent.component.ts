import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(client: HttpClient) { 
    client.get("http://localhost:8001").subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
