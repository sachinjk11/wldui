import { Plan } from './plan.model';
import { Subject } from 'rxjs';
import { isDevMode, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';

@Injectable()
export class PlanService implements OnInit
{
     plans : Plan[];
     planUpdated = new Subject<Plan[]>();
     planSelected = new Subject<boolean>();
     planEdit = new Subject<number>();
 
     ngOnInit() {  }
     constructor(private titleService: Title){ }

 
 
     set(plans: Plan[]) {
         this.plans = plans;
         this.planUpdated.next(this.plans.slice());
       }
       
       getByIndex(index: number) {
        let plan = this.plans[index];
        this.setTitle(plan.title);
        return plan;
       }

       public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
      }
     
    //    add(plan: Plan) {
    //      this.plans.push(plan);
    //      this.planUpdated.next(this.plans.slice());
    //    }
     
    //    update(index: number, post: Plan) {
    //      this.plans[index] = post;
    //      this.planUpdated.next(this.plans.slice());
    //    }
     
    //    delete(index: number) {
    //      this.plans.splice(index, 1);
    //      this.planUpdated.next(this.plans.slice());
    //    }
    
    //    get() {
    //      return this.plans.slice();
    //    }
}