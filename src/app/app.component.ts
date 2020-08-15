import {Component, OnInit} from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public todoList: Todo[] = [
    { id: 1, title: 'Learn React', done: true },
    { id: 2, title: 'Learn Angular', done: false },
  ];

  addTodo(title: string): void {
    const todo: Todo = {
      id: Math.random(),
      done: false,
      title
    };
    this.todoList.unshift(todo);
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number): void {
    this.todoList = this.todoList.map(todo => todo.id === id
      ? { ...todo, done: !todo.done }
      : todo
    );
  }

  ngOnInit(): void {
  }
}
