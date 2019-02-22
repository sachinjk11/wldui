import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../posts.model';
import { PostService } from '../../posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  constructor(private postservice : PostService, private router : Router, private route : ActivatedRoute) { 
   }

  ngOnInit() { 
  }

  onClickPost(){
    this.postservice.postSelected.next(true);
  
    this.router.navigate([this.index, this.post.title.replace(/\s+/g, '-')], {relativeTo: this.route});

  }
}
