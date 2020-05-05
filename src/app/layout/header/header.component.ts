import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickLogIn(){
  }

  @Output()   loginClicked:EventEmitter<String> = new EventEmitter();
  // show: boolean = false
}
