import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appTitle = "todo table";
  placeholder = "What needs to be done???";
  backgroundcolor = "#FF9999";

  todoValue;

  newTodo(event, inputElement) {
    console.log(inputElement.value);
  }
}
