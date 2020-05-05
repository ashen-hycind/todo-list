import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // CloseLogin

  @Output()
  closeLogin: EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hide = true;
}
