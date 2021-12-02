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

  image: any;

  percentage: number = 0;

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
      image: this.image,
    };

    this.postService.create(post);
    this.imageUpload();
  }

  handleImageUpload(event: Event) {
    const inputFile = event.target as HTMLInputElement;

    if (!inputFile.files) return;

    this.image = inputFile.files[0];
  }

  imageUpload() {
    if (this.image) {
      this.postService.upload(this.image).subscribe(
        (percentage) => {
          this.percentage = Math.round(percentage ? percentage : 0);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
