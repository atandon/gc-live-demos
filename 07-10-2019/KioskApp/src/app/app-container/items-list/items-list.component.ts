import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() cart : Item[];

  constructor() { }

  ngOnInit() {
  }

}
