import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  itemToAdd : string;

  @Output() o : EventEmitter<string> = new EventEmitter<string>();
  @Input() items : string[];

  trigger() {
    this.o.emit(1);
  }

  ngOnInit() {
    
  }


}