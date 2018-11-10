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
    this.todos.push(inputElement.value);
    inputElement.value = "";

    //this.todos.push(todoValue.value);
    //this.todoValue = "";

    console.log(this.todos);
    //console.log(inputElement.value);
  }
}
