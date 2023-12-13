import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any = [];
  comments: any = []

  constructor(private PostsService: PostsService, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.getPosts();



  }

  getPosts(){
    this.PostsService.getPosts().subscribe((res: any) => {

      this.posts = res;
      this.posts.forEach((element:any) => {
        this.PostsService.getComments().subscribe((comments:any) => {
          console.log(comments);
          element.comments = [];
          for (let i = 0; i < comments.length; i++) {
            if (comments[i].postId == element.id) {

              element.comments.push(comments[i]);
            }
          }
          console.log(this.posts.comments);

        });

      });


      console.log(this.posts);

    });

  }

  async deletePost(id: number){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estás seguro?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();
    if(await actionSheet.onWillDismiss()){
      this.posts = this.posts.filter((post:any) => post.id !== id);

    }else{
    }



  }

}
