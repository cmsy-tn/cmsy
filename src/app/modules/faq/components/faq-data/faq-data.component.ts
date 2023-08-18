import { Component, OnInit } from '@angular/core';
import { FAQTYPE } from 'src/app/types/faq.type';
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
    this.fetchData();
    this.faqService.FAQ_HAS_BEEN_DELETED$.subscribe({
      next: (response: any) => {
        if (response.state)
          this.FAQ_DATA = this.FAQ_DATA.filter(element => element.id !== response.id);
      }
    })
  }

  fetchData() {
    this.faqService.getElements().subscribe({
      next: (response: FAQTYPE[]) => {
        this.FAQ_DATA = response;
        this.isFetchingData = !this.isFetchingData;
      }
    })
  }
}
