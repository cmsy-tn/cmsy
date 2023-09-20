import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  blogForm: FormGroup = new FormGroup({});

  // USED TO KEEP TRACK OF CURRENT MODE AND LOADED POST
  EDITOR_MODE = {
    current_id: '',
    current_action: ''
  }

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
    defaultParagraphSeparator: '',
    defaultFontName: 'sans-serif',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    toolbarHiddenButtons: [
      [
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  };

  constructor(
    private blogService: BlogService,
    private fb: FormBuilder,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getConfigFromRoute();
    this.buildForm('create', null);
  }

  getConfigFromRoute() {
    this.EDITOR_MODE.current_action = this.currentRoute.snapshot.queryParams['action'];
    this.EDITOR_MODE.current_id = this.currentRoute.snapshot.params['id'];
    this.fetchCurrentBlogPost();
  }

  buildForm(action: string, payload: any) {
    if (action === 'create')
      this.blogForm = this.fb.group({
        post_title: [null, [Validators.required, Validators.minLength(5)]],
        post_content: [null, [Validators.required, Validators.minLength(5)]],
        post_status: [null],
        post_cover_image: [null]
      });
    else
      this.blogForm = this.fb.group({
        post_title: [payload.post_title],
        post_content: [payload.post_content],
        post_status: [null],
        post_cover_image: [payload.post_cover_image]
      });

  }

  fetchCurrentBlogPost() {
    if (this.EDITOR_MODE.current_id !== '0')
      this.blogService.fetchOne(this.EDITOR_MODE.current_id).subscribe({
        next: (response: any) => { this.buildForm('update', response); }
      })
    else
      this.buildForm('create', null);
  }

  savePost(STATUS: string) {
    const current_cover_image_url = this.blogForm.get('post_cover_image')?.value;
    const cover_not_found_url = 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg'

    // making sure the post always has a title
    const POST_TO_SAVE = {
      ...this.blogForm.value,
      post_cover_image: (current_cover_image_url === null) ? cover_not_found_url : current_cover_image_url,
      /**
       * no need to check for title and content
       * since publish button will be disabled till they're filled out
       * 👉️ If status is set to 'valid':
       *      - title has been filled
       *      - contnet has been filled
       *      - cover image has been handled (line above)
       *      ✅ save post as VLID
       * 👉️ If status is set to 'draft':
       *      - cover image has been handled (line above)
       *      🔴 save post as DRAFT
       */
      post_status: (STATUS === 'valid') ? STATUS_ENUM.VALID : STATUS_ENUM.DRAFT
    };

    if (this.EDITOR_MODE.current_action === 'write')
      this.blogService.addElement(POST_TO_SAVE).subscribe({
        next: (response: any) => {
          alert('Post has been saved!');
          if (this.EDITOR_MODE.current_action !== 'update')
            this.router
              .navigate(['/blog/' + response.id], { queryParams: { action: 'update' } })
              .then(() => { window.location.reload() });
        }
      })
    if (this.EDITOR_MODE.current_action === 'update')
      this.blogService.update(this.EDITOR_MODE.current_id, POST_TO_SAVE).subscribe({
        next: (response: any) => {
          alert('Post has been updated!')
        }
      })
  }
}
