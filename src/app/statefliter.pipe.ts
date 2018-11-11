import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "statefliter"
})
export class StatefliterPipe implements PipeTransform {
  transform(value: any, state?: any): any {
    console.log(state);
    if (state === "active") {
      return value.filter(x => x.isComplete === false);
    }

    if (state === "completed") {
      return value.filter(x => x.isComplete === true);
    }

    return value;
  }
}
