import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-3',
  templateUrl: './assignment-3.component.html',
  styleUrls: ['./assignment-3.component.css']
})
export class Assignment3Component implements OnInit {
  clicks = 0;
  shouldDisplay = false;
  buttonEvents = [];

  constructor() { }

  ngOnInit() {
  }

  onShowDetails() {
    this.shouldDisplay = !this.shouldDisplay;
    this.buttonEvents.push(++this.clicks)
  }

}
