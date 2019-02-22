import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { PlanDetailsComponent } from './plan/plan-details/plan-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HtmlViewerComponent } from './tools/html-viewer/html-viewer.component';
import { PlanService } from './plan/plans.service';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/weight-loss-Tips', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'weight-loss-diet-plans', component: PlanListComponent, 
  children:
    [
      { path: ':id/:title', component: PlanDetailsComponent }
    ]
  },
  { path: 'weight-loss-Tips', component: PostListComponent, 
   children: [{ path: ':id/:title', component: PostDetailsComponent },]},
  { path: 'htmlViewer', component: HtmlViewerComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
