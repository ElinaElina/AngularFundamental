import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor() { }
}
// import { Injectable } from '@angular/core';
// import { GitSearch } from './git-search';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class GitSearchService{
//   cachedValues: Array<{
//     [query:string]:GitSearch
//   }>=[];
//   private http:HttpClient
//   constructor(http:HttpClient){
//     this.http=http
//   }
//   }
