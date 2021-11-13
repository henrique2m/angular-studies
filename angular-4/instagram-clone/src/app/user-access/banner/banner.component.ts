import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

import { Image } from "../shared/interfaces/image.model";

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
      transition("hidden <=> visible", animate("1s ease-in")),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  stateAnimationBanner: string = "visible";

  images: Image[] = [
    { url: "/assets/banner/img_1.png", state: "visible" },
    { url: "/assets/banner/img_2.png", state: "hidden" },
    { url: "/assets/banner/img_3.png", state: "hidden" },
    { url: "/assets/banner/img_4.png", state: "hidden" },
    { url: "/assets/banner/img_5.png", state: "hidden" },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => this.handleSlideBanner(), 3000);
  }

  handleSlideBanner() {
    const indexCurrentImage = this.images.findIndex(
      (image) => image.state === "visible"
    );

    const indexNextImage: number = indexCurrentImage + 1;

    const existIndexImage: boolean = indexCurrentImage !== -1;

    const notOverflowArray: boolean = indexNextImage <= this.images.length - 1;

    if (existIndexImage) {
      this.images[indexCurrentImage].state = "hidden";
    }

    if (existIndexImage && notOverflowArray) {
      this.images[indexNextImage].state = "visible";
    } else {
      this.images[0].state = "visible";
    }

    setTimeout(() => this.handleSlideBanner(), 3000);
  }
}
