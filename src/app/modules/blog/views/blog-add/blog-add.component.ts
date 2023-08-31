import { Component } from '@angular/core';

@Component({
  selector: 'cmsy-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent {
  dataModel: any;
  triggerSave() {
    console.log(this.dataModel);

  }
}
