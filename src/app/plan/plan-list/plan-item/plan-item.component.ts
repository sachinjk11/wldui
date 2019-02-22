import { Component, OnInit, Input } from '@angular/core';
import { Plan } from '../../plan.model';
import { PlanService } from '../../plans.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css']
})
export class PlanItemComponent implements OnInit {

  @Input() plan : Plan;
  @Input() index: number;
  constructor(private planService : PlanService, private router : Router, private route : ActivatedRoute) { 
   }

  ngOnInit() { 
  }

  onClickPost(){
    this.planService.planSelected.next(true);
    this.router.navigate([this.index, this.plan.title.replace(/\s+/g, '-')], {relativeTo: this.route});

  }

}
