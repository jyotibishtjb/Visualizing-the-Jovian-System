import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';
import { ProcessingComponent } from './processing/processing.component';
import { AdvancedOpComponent } from './advanced-op/advanced-op.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GuideComponent } from './guide/guide.component';
import { JipComponent } from './jip/jip.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'home', component: SearchComponent},
  { path: 'processing', title:'ProcessingPage', component: ProcessingComponent },
  { path: 'advanced',component: AdvancedOpComponent },
  { path: 'about',component: AboutUsComponent },
  { path: 'app',component: JipComponent },
  { path: 'guide',component: GuideComponent },
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
