import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "http://localhost3000/api";

  async getAllPost(){

    try {

      const request = await fetch(this.base_url + "/post");
      if(request.ok && request.status === 200){
        
        const response = await request.json();
        return { error : false , data : response.data }

      }
      return { error : true , data :request.status}

    } catch (error: any) {
              return { error : false , data : error.message }

    }

  }

  async searchRequest(q:string){

    try {
      const request = await fetch(this.base_url + "/post/search?q=" + q);
      if(request.ok && request.status === 200){

        const response = await request.json();
        return {error : false , data : response.data }

      }
      return { error : true , data : request.status }

    } catch (error : any) {
      return {error : true , data: error.message }
    }
  }

  async getOnePost(id : string){

    try {
      const request = await fetch(this.base_url + "/post/:id" + id);

      if(request.ok && request.status === 200){
        const response = await request.json();
        return { error : false , data : response.data}

      }
      return { error : true , data : request.status }

    } catch (error : any) {
      return {error : true , data : error.message}
    }

  }

  async getAllByUserId(users:string){

    try {
      const request = await fetch(this.base_url + "/post/user" + users);

      if(request.ok && request.status === 200 ){

        const response = await request.json();
        return { error : false , data : response.data }
      }
      return { error : true , data : request.status }
    } catch (error : any) {

      return { error : true , data : error.message }
    }

  }

  // async create(user:string){

  //   try {
  //     const request = await (this.base_url + "/post/create" + user);

  //     // if(request.ok && request.status=== 200){

  //     // }
  //   } catch (error : any) {
      
  //   }

  // }

  constructor() { }
}
