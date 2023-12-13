import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(`${this.apiUrl}posts`);
  }
  getComments(){
    return this.http.get(`${this.apiUrl}comments`);
  }
}
