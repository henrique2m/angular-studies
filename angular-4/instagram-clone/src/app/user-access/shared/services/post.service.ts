import { Injectable } from "@angular/core";
import {
  getDatabase,
  push,
  ref,
  onValue,
  orderByKey,
} from "@firebase/database";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Post } from "../interfaces/post.model";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable()
export class PostService {
  private basePath: string = "/uploads";

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  create(post: Post): Promise<string> {
    return new Promise((resolve, reject) => {
      const database = getDatabase();

      const { email, title } = post;

      push(ref(database, `posts/${btoa(email)}`), { title }).then(
        (response) => {
          if (!response.key) {
            reject(response);
            return;
          }

          resolve(response.key);
        }
      );
    });
  }

  upload(fileUpload: any, key: string): Observable<number | undefined> {
    const filePath = `${this.basePath}/${key}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL: string) => {
            this.saveFileData({ name: fileUpload.name, url: downloadURL });
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: any) {
    this.db.list(this.basePath).push(fileUpload);
  }

  index(email: string, uid: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const database = getDatabase();

      onValue(ref(database, `posts/${btoa(email)}`), (snapshot) => {
        let posts: Array<any> = [];

        snapshot.forEach((childSnapshot: any) => {
          let post = childSnapshot.val();

          this.storage
            .ref(this.basePath)
            .child(childSnapshot.key)
            .getDownloadURL()
            .subscribe({
              next: (url: string) => {
                post.url_image = url;

                onValue(ref(database, `users/${uid}`), (response) => {
                  post.user = response.val();
                  posts.push(post);

                  resolve(posts);
                });
              },
            });
        });
      });
    });
  }
}
