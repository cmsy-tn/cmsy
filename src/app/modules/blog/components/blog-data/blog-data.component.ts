import { Component, OnInit } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog.post.type';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'cmsy-blog-data',
  templateUrl: './blog-data.component.html',
  styleUrls: ['./blog-data.component.scss']
})
export class BlogDataComponent implements OnInit {

  BLOG_DATA: BlogPostType[] = []
  isFetchingData: boolean = true;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isFetchingData = true;
    this.blogService.fetchAll().subscribe({
      next: (response: any) => {
        this.BLOG_DATA = response;
        this.isFetchingData = false;
      }
    })
  }
}
