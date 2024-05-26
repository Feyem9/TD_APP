import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

   articleId: any;
  article: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {

    this.articleId = this.route.snapshot.paramMap.get('id');
    this.apiService.getOnePost(this.articleId).then(res => {

      if (res.error) {

        alert(res.data);
        console.log(res);
      } else {

        this.article = res.data;
      }
    });
  }

}
