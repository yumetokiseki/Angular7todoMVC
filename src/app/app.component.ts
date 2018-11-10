import { element } from "protractor";
import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appTitle = "todo";
  placeholder = "What needs to be done???";
  backgroundcolor = "#FF9999";

  todos = this.dataService.todos;
  todoValue;

  constructor(private dataService: DataService) {}

  newTodo(event, inputElement) {
    this.dataService.newTodo(this.todoValue);
    this.todoValue = "";
    console.log(this.todos);
  }

  toggleComplete(todo) {
    this.dataService.toggleComplete(todo);
  }

  allComplete() {
    this.dataService.allComplete();
  }

  removeTodo(todo) {
    this.dataService.removeTodo(todo);
  }
}
