import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  constructor() {}
  state = 'all';

  todos = [];

  get itemLeft() {
    return this.todos.filter(x => x.isComplete === false).length;
  }

  newTodo(todo) {
    this.todos.push({
      label: todo,
      isComplete: false
    });
  }

  allComplete() {
    this.todos.forEach(todo => (todo.isComplete = true));
  }

  toggleComplete(todo) {
    todo.isComplete = !todo.isComplete;
  }

  removeTodo(todo) {
    // 方法1
    this.todos.splice(this.todos.indexOf(todo.lebel), 1);

    // 方法2
    // this.todos = this.todos.filter(_todo => _todo !== todo);

    // 方法3
    // this.todos.splice(todo, 1);
  }

  removeAllCompleteTodo() {
    this.todos = this.todos.filter(x => x.isComplete === false);
  }
}
