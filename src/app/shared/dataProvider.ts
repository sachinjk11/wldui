import { Injectable } from '@angular/core';
import { Plan } from '../plan/plan.model';
import { Post } from '../post/posts.model';
import { Http } from '@angular/http';


@Injectable()
export class DataProvider
{
    plans : Plan[];
    posts : Post[];


    constructor(private http: Http) {

    }

    public getPosts(): Post[] {
        return this.posts;
    }

    public getPlans(): Plan[] {
        return this.plans;
    }

    loadPost()
    {
        return new Promise((resolve, reject) => {
            this.http
                .get('https://wld001.firebaseio.com/posts.json')
                .map(res => res.json())
                .subscribe(response => {
                     const posts : Post[] = response;  
                     this.posts = posts;
                     console.log('loading --> '+posts);
                    console.log('loading --> '+response);
                    console.log('loading --> '+this.posts);
                    console.log("post loading complete")
                    resolve(true);
                })
        })
    }

    loadPlan()
    {
        return new Promise((resolve, reject) => {
            this.http
                .get('https://wld001.firebaseio.com/plans.json')
                .map(res => res.json())
                .subscribe(response => {
                     this.plans = response;  
                     console.log('loading --> '+response);
                    console.log('loading --> '+this.plans);
                    console.log("plans loading complete")
                    resolve(true);
                })
        })
    }

}