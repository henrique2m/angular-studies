import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.connectionFirebase();
  }

  connectionFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyC5Rt4m5R62PkbCbwWffU26oqOe6_sHWjI",
      authDomain: "angular-clone-instagram.firebaseapp.com",
      projectId: "angular-clone-instagram",
      storageBucket: "angular-clone-instagram.appspot.com",
      messagingSenderId: "397004634799",
      appId: "1:397004634799:web:e9eb50a3d22d53f3b4f25a",
    };

    initializeApp(firebaseConfig);
  }
}
