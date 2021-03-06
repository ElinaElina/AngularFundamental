import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  // Why GitSerachService in provider array not import array
  
  // because-By adding GitSearchService to the providers array, 
  // we are telling Angular that it is a dependency. 
  // This makes GitSearchService available to be injected into other components as needed
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }