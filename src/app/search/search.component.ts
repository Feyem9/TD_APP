import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 posts: any = [];
  q: string = '';


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.q = params['q'];
      this.apiService.searchRequest(this.q).then((res) => {

        if (res.error) {

          alert(res.data);
          console.log(res.data);
        } else {
  
          this.posts = res.data;
        }
      })
    });
  }
}
