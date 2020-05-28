import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayArticleComponent } from './display-article/display-article.component';
import { ProfileviewerComponent } from './profileviewer/profileviewer.component';


const routes: Routes = [
  { path: 'article/:id', component: DisplayArticleComponent },
  { path: 'profile/:id', component: ProfileviewerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
