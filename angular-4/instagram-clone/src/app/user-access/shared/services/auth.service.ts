import { User } from "../interfaces/user.model";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Login } from "../interfaces/login.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  idToken!: string;

  constructor(private router: Router) {}

  signUp(user: User): Promise<any> {
    const { email, name, username, password } = user;
    const auth = getAuth();

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { uid } = userCredential.user;

        const database = getDatabase();

        set(ref(database, "users/" + uid), { email, name, username, uid });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signIn(login: Login) {
    const { email, password } = login;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        auth.currentUser?.getIdToken().then((idToken: string) => {
          this.idToken = idToken;

          this.router.navigate(["/home"]);
        });
      })
      .catch((error) => console.log(error));
  }
}
