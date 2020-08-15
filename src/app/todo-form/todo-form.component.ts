import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();
  title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
