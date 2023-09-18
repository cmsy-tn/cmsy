import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.blogForm = this.fb.group({
      post_title: [null],
      post_content: [null],
      post_status: [null],
      post_cover_image: [null]
    });
    // this.getConfigFromRoute();
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
            next: (response: any) => { this.blogForm = response; }
          })
        }
      }
    })
  }

  savePost(STATUS: string) {
    // making sure the post always has a title
    const POST_TO_SAVE = {
      ...this.blogForm.value,
      post_status: (this.blogForm.get('post_title')?.value !== '' && STATUS === 'valid') ? STATUS_ENUM.VALID : STATUS_ENUM.DRAFT
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
