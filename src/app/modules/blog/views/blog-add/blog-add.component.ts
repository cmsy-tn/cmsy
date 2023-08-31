import { Component } from '@angular/core';
import { BlogPostType, STATUS_ENUM } from 'src/app/types/blog.post.type';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'cmsy-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent {
  // DUMMY POST USED TO KEEP STATE
  // WHY DIDN'T I USEA FORM I HEAR YOU ASK
  // Raised an issue 🙌
  BlogPost: BlogPostType = {
    post_title: '',
    post_content: '',
    post_status: STATUS_ENUM.DRAFT,
    post_cover_image: ''
  }

  constructor(private blogService: BlogService) { }

  savePost(STATUS: string) {
    // making sure the post always has a title
    const POST_TO_SAVE = {
      ...this.BlogPost,
      post_status: (this.BlogPost.post_title !== '' && STATUS === 'valid') ? STATUS_ENUM.VALID : STATUS_ENUM.DRAFT
    }
    this.blogService.addElement(POST_TO_SAVE).subscribe({
      next: (response: any) => {
        alert('Post has been saved!');
      }
    })
  }
}
