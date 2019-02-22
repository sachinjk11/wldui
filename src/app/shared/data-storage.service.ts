import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { PostService } from '../post/posts.service';
import { Post } from '../post/posts.model';
import { PlanService } from '../plan/plans.service';
import { Plan } from '../plan/plan.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,private postService : PostService,
              private planService : PlanService) {
  }

  getposts() 
  {
    // this.http.get('https://wld001.firebaseio.com/posts.json')
    //   .map(
    //         (response: Response) => {  const posts: Post[] = response.json();  return posts; }
    //       )
    //   .subscribe(
    //                 (posts: Post[]) => {  this.postService.set(posts); }
    //   );
  }




  getPlans()
  {
    // console.log('---->***');
    // this.http.get('https://wld001.firebaseio.com/plans.json')
    // .toPromise()
    // .then((data: Response) => {
    //   /* tslint:disable:no-console */
    //   console.time('request-length');
    //   console.log('--->'+data.json());
    //   const plans : Plan[] = data.json();
    //   return plans;
    // }); 
 }
}
