import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { GitSearchService } from '../git-search.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', 
  component: HomePageComponent 
},
{ path: 'search',      
  component: GitSearchComponent,
  data: { 
    title: 'Git Search' 
  } 
},
{ path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
          appRoutes
        )
    ],
    providers: [GitSearchService],
    bootstrap: [AppComponent],
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FirstModuleModule { }
