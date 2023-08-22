import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../faq.service';


@Component({
  selector: 'cmsy-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  DATA_IS_BEING_SENT = false;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.faqService.DATA_IS_BEING_SENT.subscribe({
      next: (value: boolean) => {
        this.DATA_IS_BEING_SENT = value;
      }
    })
  }
}
