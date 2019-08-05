import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private nums : number[] = [1,3,6,7,9,2];

  private inputVal : string;

  constructor(private loggingService : LoggingService) {
  }

  @Input()
  private defaultNum : string;

  ngOnInit() {
    this.inputVal = this.defaultNum;
  }

  changeNumbers(event) : void {
    this.loggingService.info("hello");
    this.nums = [1,8,9,2,7,9,0];
  }

  isMatch() : void {
    const userNum : number = parseInt(this.inputVal);

    for(let i = 0; i < this.nums.length;i++) {
      if (this.nums[i] === userNum) {
        alert("It's a match!");
        return;
      }
    }
  }

}
