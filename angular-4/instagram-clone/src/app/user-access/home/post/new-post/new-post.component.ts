import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { getAuth } from "@firebase/auth";
import { Post } from "src/app/user-access/shared/interfaces/post.model";
import { PostService } from "src/app/user-access/shared/services/post.service";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
})
export class NewPostComponent implements OnInit {
  emailUserAuth!: string | null;
  uid!: string | null;

  image: any;

  percentage: number = 0;

  @Output() posts = new EventEmitter();

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
      if (user) {
        this.emailUserAuth = user.email;
        this.uid = user.uid;
      }

      this.handlePosts();
    });
  }

  handleNewPost() {
    if (!this.emailUserAuth) return;

    const post: Post = {
      email: this.emailUserAuth,
      title: this.formNewPost.get("title")?.value,
      image: this.image,
    };

    this.postService.create(post).then((key) => {
      this.imageUpload(key);
    });
  }

  handleImageUpload(event: Event) {
    const inputFile = event.target as HTMLInputElement;

    if (!inputFile.files) return;

    this.image = inputFile.files[0];
  }

  imageUpload(key: string) {
    if (this.image) {
      this.postService.upload(this.image, key).subscribe(
        (percentage) => {
          this.percentage = Math.round(percentage ? percentage : 0);
          this.handlePosts();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  handlePosts() {
    if (!this.emailUserAuth || !this.uid) return;

    this.postService.index(this.emailUserAuth, this.uid).then((response) => {
      this.posts.emit(response);
    });
  }
}
