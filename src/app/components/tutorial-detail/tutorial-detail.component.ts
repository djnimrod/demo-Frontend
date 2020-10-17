import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-tutorial-detail",
  templateUrl: "./tutorial-detail.component.html",
  styleUrls: ["./tutorial-detail.component.css"],
})
export class TutorialDetailComponent implements OnInit {
  // variables
  currentTutorial = null;
  message = "";
  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.getTutorial(this.route.snapshot.paramMap.get("id"));
  }

  getTutorial(id): void {
    this.tutorialService.get(id).subscribe(
      (data) => {
        this.currentTutorial = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status,
    };

    this.tutorialService.update(this.currentTutorial.id, data).subscribe(
      (response) => {
        this.currentTutorial.publiseh = status;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTutorial(): void {
    this.tutorialService
      .update(this.currentTutorial.id, this.currentTutorial)
      .subscribe(
        (response) => {
          this.message = "The tutorial was updated successfully";
          setTimeout(() => {
            this.router.navigateByUrl("api/tutorials");
          }, 1000);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/tutorials"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
