import { Component, OnInit, Input } from '@angular/core';
import { Item } from './interfaces';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  cart : Item[];

  itemToBeAdded : string;

  constructor() { 
    this.cart = [{
      name: 'Apple',
      date: new Date()
    }]
  }

  addToCart() {
    this.cart.push({
      name: this.itemToBeAdded,
      date: new Date()
    })
  }

  ngOnInit() {
  }

}
