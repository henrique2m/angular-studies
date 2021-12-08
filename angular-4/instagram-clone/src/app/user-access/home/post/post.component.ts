import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  posts!: any[];
  constructor() {}

  ngOnInit(): void {}

  loadPosts(posts: any[]) {
    this.posts = posts;
    console.log(posts);
  }
}
