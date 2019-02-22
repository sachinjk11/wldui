//import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//import { TransferHttpCacheModule } from '@nguniversal/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './tools/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { DataStorageService } from './shared/data-storage.service';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostItemComponent } from './post/post-list/post-item/post-item.component';
import { PostService } from './post/posts.service';
import { FooterComponent } from './tools/footer/footer.component';
import { PlanDetailsComponent } from './plan/plan-details/plan-details.component';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { PlanItemComponent } from './plan/plan-list/plan-item/plan-item.component';
import { PlanService } from './plan/plans.service';
import { HtmlViewerComponent } from './tools/html-viewer/html-viewer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataProvider } from './shared/dataProvider';

export function postProviderFactory(provider: DataProvider) {
  return () => provider.loadPost();
}

export function planProviderFactory(provider: DataProvider) {
  return () => provider.loadPlan();
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    PostListComponent,
    PostDetailsComponent,
    PostItemComponent,
    FooterComponent,
    PlanDetailsComponent,
    PlanListComponent,
    PlanItemComponent,
    HtmlViewerComponent,
    DashboardComponent

  ],
  imports:[
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CommonModule,
   // NgtUniversalModule,
   // TransferHttpCacheModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ PlanService,DataStorageService, PostService, DataProvider, 
    { provide: APP_INITIALIZER, useFactory: planProviderFactory, deps: [DataProvider], multi: true },
    { provide: APP_INITIALIZER, useFactory: postProviderFactory, deps: [DataProvider], multi: true }],

  
    
})
export class AppModule { }
