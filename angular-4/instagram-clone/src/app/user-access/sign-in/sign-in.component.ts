import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Login } from "../shared/interfaces/login.model";

import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  @Output()
  signUp: EventEmitter<string> = new EventEmitter<string>();

  formSignIn: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleSignUp() {
    this.signUp.emit("signUp");
  }

  signIn() {
    const login: Login = this.formSignIn.value;
    this.authService.signIn(login);
  }
}
