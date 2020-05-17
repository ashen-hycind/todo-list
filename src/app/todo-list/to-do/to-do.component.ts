import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  title: string = 'Untitled'
  items: string[] = [];
  an_item: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  deleteListItem(item: any) {
    // alert('Item will be deleted' + item)
    let idx = this.items.indexOf(item);

    if (idx > -1) {
      this.items.splice(idx, 1);
    }
  }

  onKeydown(event: any) {
    // alert('enter')
    this.items.push(this.an_item)
    this.an_item = '';
  }

  editTitle: boolean = false;
}
