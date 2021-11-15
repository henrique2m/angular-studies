import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../shared/interfaces/user.model";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  @Output()
  signIn: EventEmitter<string> = new EventEmitter<string>();

  formSignUp: FormGroup = new FormGroup({
    email: new FormControl(null),
    name: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleSignIn() {
    this.signIn.emit("signIn");
  }

  signUp() {
    const user: User = this.formSignUp.value;

    this.authService.signUp(user).then(() => {
      this.handleSignIn();
    });
  }
}
