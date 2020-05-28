import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProfileviewerComponent } from './profileviewer/profileviewer.component';
import { DisplayArticleComponent } from './display-article/display-article.component';


@NgModule({
  declarations: [ProfileviewerComponent, DisplayArticleComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
