import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../app.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() toggleTodo: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter<any>();

  toggleDone(): void {
    this.toggleTodo.emit(this.todo.id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
