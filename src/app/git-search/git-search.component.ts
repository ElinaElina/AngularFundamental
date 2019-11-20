import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
//   template:
//  `<h3>Total Results: {{searchREsult.total_count}}</h3>
//  <p> 
// git-search works!
//   </p>
//   `,
//   styles: ['p { background: grey; }']
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults : GitSearch;
  searchQuery: string;
  constructor(private GitSearchService: GitSearchService) { }
 
  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then( (response) => {
     
       this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

}