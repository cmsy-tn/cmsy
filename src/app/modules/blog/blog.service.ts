import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BLOGPOSTACTIONSTATE, BlogPostType } from 'src/app/types/blog.post.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  API_URL = environment.API_URL;
  BLOG_POST_HAS_BEEN_TRIGGERED$ = new BehaviorSubject<BLOGPOSTACTIONSTATE>(<BLOGPOSTACTIONSTATE>{ state: false, id: '', action: '' });


  constructor(private http: HttpClient) { }

  addElement(payload: BlogPostType) {
    return this.http.post(`${this.API_URL}/blog/`, payload);
  }

  fetchOne(id: string) {
    return this.http.get(`${this.API_URL}/blog/${id}`);
  }

  fetchAll() {
    return this.http.get(`${this.API_URL}/blog/`);
  }

  update(id: string, payload: BlogPostType) {
    return this.http.put(`${this.API_URL}/blog/${id}`, payload);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URL}/blog/${id}`);
  }

}
