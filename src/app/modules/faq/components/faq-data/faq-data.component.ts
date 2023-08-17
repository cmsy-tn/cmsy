import { Component, OnInit } from '@angular/core';
import FAQTYPE from 'src/app/types/faq';
import { FaqService } from '../../faq.service';

@Component({
  selector: 'cmsy-faq-data',
  templateUrl: './faq-data.component.html',
  styleUrls: ['./faq-data.component.scss']
})
export class FaqDataComponent implements OnInit {
  FAQ_DATA: FAQTYPE[] = []
  isFetchingData: boolean = true;

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getElements().subscribe({
      next: (response: FAQTYPE[]) => {
        this.FAQ_DATA = response;
        this.isFetchingData = !this.isFetchingData;
      }
    })
  }
}
