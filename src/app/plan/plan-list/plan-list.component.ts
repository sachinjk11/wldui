import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { Plan } from '../plan.model';
import { PlanService } from '../plans.service';
import { DataProvider } from 'src/app/shared/dataProvider';



@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css'],
})
export class PlanListComponent implements OnInit {


  plans : Plan[];
  subscription1 : Subscription;
  subscription2 : Subscription;
  planSelected : boolean;

   constructor(private planService : PlanService, private router : Router, private route : ActivatedRoute,
     private dataStorageService : DataStorageService, private dataprovider : DataProvider) 
   { 
      this.plans = dataprovider.getPlans();
      this.planService.set(this.plans);
   }
 
    ngOnInit() {
               
          this.subscription1 =  this.planService.planUpdated.subscribe(
          (plans : Plan[])=>{ this.plans = plans});
      
          this.subscription2 =  this.planService.planSelected.subscribe(
          (planSelected : boolean)=>{ this.planSelected = planSelected});

          if (this.router.url.split("/").length > 3)
          {
            this.planService.planSelected.next(true);
          //  console.log('---->'+this.planService.get());
            
          }
          else
          {
               //this.plans = this.planService.get();
              this.planService.planSelected.next(false);
          }
   }

    onNewPlan() {
     this.planService.planSelected.next(true);
     this.router.navigate(['new'], {relativeTo: this.route});
   }
 
   onClickback(){
     this.planService.planSelected.next(false);
     this.router.navigate(['./'], {relativeTo: this.route});
    
   }
 
   ngOnDestroy() {
     this.subscription1.unsubscribe();
     this.subscription2.unsubscribe();
   }
 

}
