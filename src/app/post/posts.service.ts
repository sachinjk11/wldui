import { Post } from './posts.model';
import { Subject } from 'rxjs';
import { Injectable, isDevMode } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PostService
{
    posts : Post[] = [];

    postUpdated = new Subject<Post[]>();
    postSelected = new Subject<boolean>();
    postEdit = new Subject<number>();

   
    constructor(private titleService: Title){}

    set(posts: Post[]) {
        this.posts = posts;
        this.postUpdated.next(this.posts.slice());
      }
    
      // get() {
      //   return this.posts.slice();
      // }
    
      getByIndex(index: number) {
        let post = this.posts[index];
        this.setTitle(post.title);
        return post;
      }
    
      // add(post: Post) {
      //   this.posts.push(post);
      //   this.postUpdated.next(this.posts.slice());
      // }
    
      // update(index: number, post: Post) {
      //   this.posts[index] = post;
      //   this.postUpdated.next(this.posts.slice());
      // }
    
      // delete(index: number) {
      //   this.posts.splice(index, 1);
      //   this.postUpdated.next(this.posts.slice());
      // }

      public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
      }

}