import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-2',
  templateUrl: './assignment-2.component.html',
  styleUrls: ['./assignment-2.component.css']
})


export class Assignment2Component implements OnInit {
  username = "";


  constructor() { }

  ngOnInit() {
  }

  resetUsername() {
    this.username = "";
  }

}
