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
}
