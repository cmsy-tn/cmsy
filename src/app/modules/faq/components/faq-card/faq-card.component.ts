import { Component, Input } from '@angular/core';
import { FaqService } from '../../faq.service';

@Component({
  selector: 'cmsy-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent {
  @Input() data: any;

  constructor(private faqService: FaqService) { }

  deleteFAQ(faq_id: string) {
    this.faqService.deleteElement(faq_id).subscribe({
      next: (response: number) => {
        if (response !== 0) {
          alert('⚠️ FAQ has been successfully deleted! 🗑️');
          this.faqService.FAQ_HAS_BEEN_DELETED$.next({
            state: true,
            id: faq_id
          });
        }
      }
    })
  }
}
