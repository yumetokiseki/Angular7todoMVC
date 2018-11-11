import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { DataService } from "./data.service";
import { FlitersComponent } from "./fliters/fliters.component";
import { StatefliterPipe } from './statefliter.pipe';

@NgModule({
  declarations: [AppComponent, FooterComponent, FlitersComponent, StatefliterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
