import { Plan } from './plan.model';
import { Subject } from 'rxjs';
import { isDevMode, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class PlanService implements OnInit,Resolve<Plan>
{
     plans : Plan[];
     planUpdated = new Subject<Plan[]>();
     planSelected = new Subject<boolean>();
     planEdit = new Subject<number>();
 
     ngOnInit() { this.plans = this.route.snapshot.data['data']; }
     constructor(private http: Http, private route : ActivatedRoute){ }

     resolve(route: ActivatedRouteSnapshot): Promise<Plan> {
      return new Promise((resolve, reject) => {
        this.http.get('https://wld001.firebaseio.com/plans.json')
        .subscribe(result => { (posts: Plan[]) => {  
          this.set(posts); 
          return resolve(posts[0]);
        } });
      });
   }
 
     set(plans: Plan[]) {
         this.plans = plans;
         this.planUpdated.next(this.plans.slice());
       }
     
       get() {
         return this.plans.slice();
       }
     
       getByIndex(index: number) {
        let plan = this.plans[index];
        return plan;
       }
     
       add(plan: Plan) {
         this.plans.push(plan);
         this.planUpdated.next(this.plans.slice());
       }
     
       update(index: number, post: Plan) {
         this.plans[index] = post;
         this.planUpdated.next(this.plans.slice());
       }
     
       delete(index: number) {
         this.plans.splice(index, 1);
         this.planUpdated.next(this.plans.slice());
       }
    
 
}