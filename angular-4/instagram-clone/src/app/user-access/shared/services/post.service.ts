import { Injectable } from "@angular/core";
import { getDatabase, push, ref } from "@firebase/database";
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

  create(post: Post) {
    const database = getDatabase();

    const { email, title } = post;

    push(ref(database, `posts/${btoa(email)}`), { title });
  }

  upload(fileUpload: any): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.name}`;
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
}
