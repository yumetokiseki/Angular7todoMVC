import { element } from "protractor";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appTitle = "todo";
  placeholder = "What needs to be done???";
  backgroundcolor = "#FF9999";

  todos = [];
  todoValue;

  newTodo(event, inputElement) {
    this.todos.push({
      label: this.todoValue,
      isComplete: false
    });
    this.todoValue = "";

    console.log(this.todos);
  }

  toggleComplete(todo) {
    todo.isComplete = !todo.isComplete;
  }

  allComplete() {
    this.todos.forEach(todo => (todo.isComplete = true));
  }

  removeTodo(todo) {
    // 方法1
    // this.todos.splice(this.todos.indexOf(todo.lebel), 1);

    // 方法2
    this.todos = this.todos.filter(_todo => _todo !== todo);

    // 方法3
    // this.todos.splice(todo, 1);
  }
}
