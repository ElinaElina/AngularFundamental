import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
//toPromise makes App as small as possible, but why doesnt work?
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
 
  constructor(private http: HttpClient) {
    this.http = http
      
   }

  gitSearch = (query) => {
    let promise = new Promise((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
              resolve(response as GitSearch)
          },(error) => {
            reject(error);
        })
        }
    })
    return promise;
  }
}