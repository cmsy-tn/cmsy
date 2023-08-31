import { Component, Input } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog.post.type';

@Component({
  selector: 'cmsy-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() data!: BlogPostType | any;
}
