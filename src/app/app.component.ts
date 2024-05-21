import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './types/todo';

const todos = [
  {id: 1, title: "test1", complited: false},
  {id: 2, title: "test2", complited: false},
  {id: 3, title: "test3", complited: true},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = todos;

  todoForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    })
  })

  get title(): FormControl {
    return this.todoForm.get('title') as FormControl
  }

  get activeTodos() {
    return todos.filter((todo) => !todo.complited)
  }

  addTodo() {
    if (this.todoForm.invalid) {
      return
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.title.value as string,
      complited: false,
    }

    this.todos.push(newTodo)
    this.todoForm.reset
  }
}
