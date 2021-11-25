import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { getAuth } from "@firebase/auth";
import { Post } from "src/app/user-access/shared/interfaces/post.model";
import { PostService } from "src/app/user-access/shared/services/post.service";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
})
export class NewPostComponent implements OnInit {
  emailUserAuth: any;

  formNewPost: FormGroup = new FormGroup({
    title: new FormControl(null),
  });

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.userAuth();
  }

  userAuth() {
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      if (user) this.emailUserAuth = user.email;
    });
  }

  handleNewPost() {
    const post: Post = {
      email: this.emailUserAuth,
      title: this.formNewPost.get("title")?.value,
    };

    this.postService.create(post);
  }
}
