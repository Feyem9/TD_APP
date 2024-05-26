import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
  posts = [];

  constructor(private apiService : ApiService ){
    this.apiService.getAllPost().then((res) =>{
      if(res.error){
        alert(res.data);
        console.log(res.data);
        
      }else{
        this.posts = res.data
      }
    })
  }

}
