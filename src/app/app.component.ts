import { Component } from '@angular/core';

const todos = [
  {id: 1, title: "test1", complited: false},
  {id: 2, title: "test2", complited: false},
  {id: 3, title: "test3", complited: true},
]

interface TodoProps {
  id: number,
  title: string,
  complited: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editing = false;
  todos = todos;

  handleTodoToggle(event: Event, todo: TodoProps) {
    todo.complited = (event.target as HTMLInputElement).checked
  }
}
