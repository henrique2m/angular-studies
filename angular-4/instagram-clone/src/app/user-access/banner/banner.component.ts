import { state, style, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
  animations: [
    trigger("slideBanner", [
      state(
        "hidden",
        style({
          opacity: 0,
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
        })
      ),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  stateAnimationBanner: string = "visible";

  constructor() {}

  ngOnInit(): void {}
}
