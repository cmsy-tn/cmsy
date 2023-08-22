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
    this.checkForUpdates();
  }

  fetchData() {
    this.isFetchingData = true;
    this.faqService.getElements().subscribe({
      next: (response: FAQTYPE[]) => {
        this.FAQ_DATA = response;
        this.isFetchingData = false;
      }
    })
  }

  checkForUpdates() {
    this.faqService.FAQ_HAS_BEEN_TRIGGERED$.subscribe({
      next: (response: any) => {
        if (response.state && response.action === 'del')
          this.FAQ_DATA = this.FAQ_DATA.filter(element => element.id !== response.id);
        if (response.state && response.action === 'add' || 'update')
          this.fetchData();
      }
    })
  }
}
