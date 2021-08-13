import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "./user.model";

interface PropsErrorForm {
  message: string;
}

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  @ViewChild("spanError")
  spanError!: ElementRef;

  user: User = {
    name: "",
    email: "",
  };

  error: PropsErrorForm = {
    message: "",
  };

  constructor() {}

  ngOnInit(): void {}

  handleSubmitFormNewsletter(): void {
    const { name, email } = this.user;

    if (name === "" || email === "") {
      this.spanError.nativeElement.style = "display:flex";
      this.error.message = "Por favor! Preencha todos os campos!";
      return;
    }

    this.error.message = "";
    this.user.name = "";
    this.user.email = "";
    this.spanError.nativeElement.style = "display:none";

    console.log(`Nome: ${name}, E-mail: ${email}`);
  }
}
