import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfShoes: string[] = []

  deleteListItem(item: any) {
    // alert('Item will be deleted' + item)
    let idx = this.typesOfShoes.indexOf(item);

    if (idx > -1) {
      this.typesOfShoes.splice(idx, 1);
    }
  }

  onKeydown(evnt: any) {
    // alert('enter')
    this.typesOfShoes.push(this.item)
    this.item = ''; 
  }

  item: string = '';
  title: string = 'Untitled';
  editTitle: boolean = false;
}
