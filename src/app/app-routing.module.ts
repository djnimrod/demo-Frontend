import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorialListComponent } from "./components/tutorial-list/tutorial-list.component";
import { TutorialDetailComponent } from "./components/tutorial-detail/tutorial-detail.component";
import { AddTutorialComponent } from "./components/add-tutorial/add-tutorial.component";

const routes: Routes = [
  { path: "", redirectTo: "api/tutorials", pathMatch: "full" },
  { path: "api/tutorials", component: TutorialListComponent },
  {
    path: "api/tutorials/:id",
    component: TutorialDetailComponent,
  },
  { path: "add", component: AddTutorialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
