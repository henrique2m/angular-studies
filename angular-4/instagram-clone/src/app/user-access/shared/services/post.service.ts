import { Injectable } from "@angular/core";
import { getDatabase, push, ref } from "@firebase/database";
import { Post } from "../interfaces/post.model";

@Injectable()
export class PostService {
  constructor() {}

  create(post: Post) {
    const database = getDatabase();

    const { email, title } = post;

    push(ref(database, `posts/${btoa(email)}`), { title });
  }
}
