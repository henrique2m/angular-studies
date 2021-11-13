import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  @Output()
  signIn: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleSignIn() {
    this.signIn.emit("signIn");
  }
}
