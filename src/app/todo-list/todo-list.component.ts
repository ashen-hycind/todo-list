import { Component, OnInit } from '@angular/core';

interface ToDo {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  ToDoList: ToDo[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
    this.addList();
  }
  
  addList() {
    this.ToDoList.push({
      title: 'Untitled',
      items: ['']
    });
  }


  // typesOfShoes: string[] = []


  // onKeydown(event: any) {
  //   // alert('enter')
  //   this.typesOfShoes.push(this.item)
  //   this.item = ''; 
  // }

  // item: string = ''; 
  // title: string = 'Untitled';
  // editTitle: boolean = false;
}