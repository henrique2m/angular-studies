import { User } from "../interfaces/user.model";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Login } from "../interfaces/login.model";

export class AuthService {
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
        const user = userCredential.user;

        console.log(user);
      })
      .catch((error) => console.log(error));
  }
}
