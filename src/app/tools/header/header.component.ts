import { Component, OnInit, isDevMode } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { PlanService } from '../../plan/plans.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../post/posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              private planservice : PlanService,
              private route : ActivatedRoute, private router : Router,
              private postservice : PostService) {
  }

  ngOnInit() {
 //if(!isDevMode())
     this.onFetchData();
  }
  // onSaveData() {
  
  //   this.dataStorageService.storePosts().subscribe(
  //       (response: Response) => {
  //         console.log('Posts----'+response);
  //       }
  //     );
  //     this.dataStorageService.storePlans().subscribe(
  //       (response: Response) => {
  //         console.log('Plans----'+response);
  //       }
  //     );
  // }

  onFetchData() {
 
    this.dataStorageService.getposts();
    this.dataStorageService.getPlans();
  }

  onClickPlan()
  {
    this.planservice.planSelected.next(false);

    console.log('h->'+this.planservice.planSelected);
    
    this.router.navigate(['/weight-loss-diet-plans'], {relativeTo: this.route});
  }
  onClickPost()
  {
    this.postservice.postSelected.next(false);

    console.log('h->'+this.planservice.planSelected);

    this.router.navigate(['/weight-loss-Tips'], {relativeTo: this.route});
  }
}
