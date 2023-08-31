import { Component, Input } from '@angular/core';
import { BlogPostType } from 'src/app/types/blog.post.type';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'cmsy-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() data!: BlogPostType | any;
  blog_post_is_being_worked_on_local_state = false;

  constructor(private blogService: BlogService) { }

  delete(id: string) {
    this.blog_post_is_being_worked_on_local_state = true;
    this.blogService.delete(id).subscribe({
      next: (response: any) => {
        alert('⚠️ Blog post has been successfully deleted! 🗑️');
        this.blogService.BLOG_POST_HAS_BEEN_TRIGGERED$.next({
          state: true,
          id: id,
          action: 'del'
        });
      }
    })
  }
}
