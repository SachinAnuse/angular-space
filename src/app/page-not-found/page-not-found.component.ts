import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="card bg-dark text-white">
    <div class="card-header">
      <h2><span class="badge badge-danger">Page Not Found</span></h2>
      
    </div>
    <div class="card-body">
      <p>
      The page you are looking for is not available or you do not have permissions to view it.  
      </p>
    </div> 
  </div>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
