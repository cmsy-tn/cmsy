import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostType, STATUS_ENUM } from 'src/app/types/blog.post.type';
import { BlogService } from '../../blog.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'cmsy-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {
  // DUMMY POST USED TO KEEP STATE
  // WHY DIDN'T I USEA FORM I HEAR YOU ASK
  // Raised an issue 🙌
  BlogPost: any = {
    post_title: '',
    post_content: '',
    post_status: STATUS_ENUM.DRAFT,
    post_cover_image: ''
  }

  // USED TO KEEP TRACK OF CURRENT MODE AND LOADED POST
  EDITOR_MODE = {
    current_id: '',
    current_action: ''
  }

  htmlContent: string = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'customToolBar',
        class: 'customToolBar',
      }
    ]
  };


  constructor(
    private blogService: BlogService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getConfigFromRoute();
  }

  getConfigFromRoute() {
    this.currentRoute.queryParams.subscribe({
      next: (value: any) => { this.EDITOR_MODE.current_action = value.action; }
    });
    this.currentRoute.params.subscribe({
      next: (value: any) => {
        if (value.id !== 0) {
          this.EDITOR_MODE.current_id = value.id;
          this.blogService.fetchOne(value.id).subscribe({
            next: (response: any) => { this.BlogPost = response; }
          })
        }
      }
    })
  }

  savePost(STATUS: string) {
    // making sure the post always has a title
    const POST_TO_SAVE = {
      ...this.BlogPost,
      post_status: (this.BlogPost.post_title !== '' && STATUS === 'valid') ? STATUS_ENUM.VALID : STATUS_ENUM.DRAFT
    }
    if (this.EDITOR_MODE.current_action === 'write')
      this.blogService.addElement(POST_TO_SAVE).subscribe({
        next: (response: any) => {
          this.handlePostSubmit(response.id);
        }
      })
    if (this.EDITOR_MODE.current_action === 'update')
      this.blogService.update(this.EDITOR_MODE.current_id, POST_TO_SAVE).subscribe({
        next: (response: any) => {
          alert('Post has been updated!')
        }
      })
  }

  handlePostSubmit(id: string) {
    alert('Post has been saved!');
    // post saved but current mode is still write
    //    👉️ saving will result in creating a new entry in DB
    // navigate baack to same url but with updated params (id + mode)
    //    👉️ saving will result in updating current entry in DB
    this.router.navigate(['/blog/' + id], { queryParams: { action: 'update' } })
    // now checl for current mode before saving to db
  }
}
