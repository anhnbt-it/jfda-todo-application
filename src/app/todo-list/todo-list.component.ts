import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Itodo } from '../itodo';


let _id = 1;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  userInput = new FormControl();
  todos: Array<Itodo> = [];

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: Itodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
