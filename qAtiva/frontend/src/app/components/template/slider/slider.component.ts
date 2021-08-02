import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgbSlideEvent,
  NgbSlideEventSource,
  NgbCarousel,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent implements OnInit {
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild("mycarousel", { static: true }) carousel!: NgbCarousel;

  constructor() {}

  ngOnInit() {}

  startCarousel() {
    this.carousel.cycle();
  }

  pauseCarousel() {
    this.carousel.pause();
  }

  moveNext() {
    this.carousel.next();
  }

  getPrev() {
    this.carousel.prev();
  }

  goToSlide(slide: string) {
    this.carousel.select(slide);
  }
}
