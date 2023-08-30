import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FaqService } from '../../faq.service';
import { FAQTYPE, UPDATED_FAQ } from 'src/app/types/faq.type';

@Component({
  selector: 'cmsy-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss']
})
export class FaqCardComponent {
  @Input() data: any;
  faq_is_in_edit_mode: boolean = false;
  faq_being_worked_on_local_state = false;

  // EDIT MODE
  @ViewChild('question_updated') question_updated!: ElementRef;
  @ViewChild('answer_updated') answer_updated!: ElementRef;


  constructor(private faqService: FaqService) { }

  deleteFAQ(faq_id: string) {
    this.faq_being_worked_on_local_state = true;
    this.faqService.deleteElement(faq_id).subscribe({
      next: (response: number) => {
        if (response !== 0) {
          alert('⚠️ FAQ has been successfully deleted! 🗑️');
          this.faqService.FAQ_HAS_BEEN_TRIGGERED$.next({
            state: true,
            id: faq_id,
            action: 'del'
          });
        }
      }
    })
  }

  editFAQ(faq_id: string) {
    this.faq_being_worked_on_local_state = true;
    let updated_values: UPDATED_FAQ = {
      question: this.question_updated.nativeElement.value,
      answer: this.answer_updated.nativeElement.value,
    };

    this.faqService.updateElement(faq_id, updated_values).subscribe({
      next: () => {
        alert('✅ FAQ has been successfully updated!');
        this.faqService.FAQ_HAS_BEEN_TRIGGERED$.next({
          state: true,
          id: faq_id,
          action: 'update'
        });
        this.faq_being_worked_on_local_state = false;
        this.faq_is_in_edit_mode = false;
      }
    })

  }
}
