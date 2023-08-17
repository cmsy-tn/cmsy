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
      next: (response: any[]) => {
        // @TODO TRIGGER TOASTER FOR SUCCESS !
      }
    })
  }
}
