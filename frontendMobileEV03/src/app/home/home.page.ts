import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any = [];
  comments: any = []

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.getPosts();

  }

  getPosts(){
    this.PostsService.getPosts().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.PostsService.getComments().subscribe((commenta:any) => {
          commenta.forEach((comment: any) => {
            if (element.id == comment.postId){
              element.comments = comment;
              console.log(comment);
            }
          });

        });

      });
      this.posts = res;
      console.log(this.posts);
    });

  }

  deletePost(id: number){
  }

}
