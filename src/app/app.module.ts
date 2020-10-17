import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddTutorialComponent } from "./components/add-tutorial/add-tutorial.component";
import { TutorialDetailComponent } from "./components/tutorial-detail/tutorial-detail.component";
import { TutorialListComponent } from "./components/tutorial-list/tutorial-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailComponent,
    TutorialListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
