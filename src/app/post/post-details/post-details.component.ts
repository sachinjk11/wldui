import { Component, OnInit } from '@angular/core';
import { Post } from '../posts.model';
import { PostService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { DataProvider } from 'src/app/shared/dataProvider';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  id: number;
  subscription1 : Subscription;

  constructor(private postservice : PostService, private router : Router,
     private route : ActivatedRoute, private titleService: Title,
     private dataprovider : DataProvider) {
      // this.post = dataprovider.getPosts();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.post = this.postservice.getByIndex(this.id);

          this.subscription1 =  this.postservice.postUpdated.subscribe(
            (posts : Post[])=>{ 
              this.post = posts[this.id];  
              this.titleService.setTitle(this.post.title);
            });
        }
      );
    //  this.post = this.postservice.getByIndex(this.id);
      this.postservice.postSelected.next(true);
    
      
  }

  onEdit() {
    //this.router.navigate(['edit'], {relativeTo: this.route});
     this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDelete()
  {
    this.postservice.delete(this.id);
    this.postservice.postSelected.next(false);
    this.router.navigate(['/weight-loss-Tips']);
  }
}
