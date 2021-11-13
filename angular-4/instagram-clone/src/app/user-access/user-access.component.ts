import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-access",
  templateUrl: "./user-access.component.html",
  styleUrls: ["./user-access.component.css"],
  animations: [
    trigger("animation-banner", [
      state(
        "create",
        style({
          opacity: 1,
        })
      ),
      transition("void => create", [
        style({ opacity: 0, transform: "translate(-50px, 0)" }),
        animate("500ms 0s ease-in-out"),
      ]),
    ]),
    trigger("animation-main", [
      state(
        "create",
        style({
          opacity: 1,
        })
      ),
      transition("void => create", [
        style({ opacity: 0, transform: "translate(50px, 0)" }),
        animate(
          "1.5s 0s ease-in-out",
          keyframes([
            style({ offset: 0.15, opacity: 1, transform: "translateX(0)" }),
            style({ offset: 0.86, opacity: 1, transform: "translateX(0)" }),

            style({ offset: 0.88, opacity: 1, transform: "translateY(-10px)" }),
            style({ offset: 0.9, opacity: 1, transform: "translateY(10px)" }),
            style({ offset: 0.92, opacity: 1, transform: "translateY(-10px)" }),
            style({ offset: 0.94, opacity: 1, transform: "translateY(10px)" }),
            style({ offset: 0.96, opacity: 1, transform: "translateY(-10px)" }),
            style({ offset: 0.98, opacity: 1, transform: "translateY(10px)" }),
          ])
        ),
      ]),
    ]),
  ],
})
export class UserAccessComponent implements OnInit {
  stateAnimationBanner: string = "create";
  stateAnimationMain: string = "create";

  register: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleSignIn() {
    this.register = true;
  }

  handleSignUp() {
    this.register = false;
  }
}
