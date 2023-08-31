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
    this.checkForUpdates();
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

  checkForUpdates() {
    this.blogService.BLOG_POST_HAS_BEEN_TRIGGERED$.subscribe({
      next: (response: any) => {
        if (response.state && response.action === 'del')
          this.BLOG_DATA = this.BLOG_DATA.filter(element => element.id !== response.id);
      }
    })
  }
}
