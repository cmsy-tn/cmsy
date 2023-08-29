import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaqService } from '../../faq.service';

@Component({
  selector: 'cmsy-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss']
})
export class FaqFormComponent implements OnInit {
  @Output() triggerCloseEvent = new EventEmitter<boolean>();
  FAQ_FORM!: FormGroup;
  DATA_IS_BEING_SENT = false;

  constructor(
    private faqService: FaqService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.FAQ_FORM = this.fb.group({
      question: [null, Validators.required],
      answer: [null, Validators.required],
    });
  }

  saveFAQS() {
    this.DATA_IS_BEING_SENT = true;
    this.faqService.DATA_IS_BEING_SENT.next(true); // updating a shared status to lock form
    const data = this.FAQ_FORM.value;

    this.faqService.addElement(data).subscribe({
      next: (response: any) => {
        this.faqService.DATA_IS_BEING_SENT.next(false);
        this.faqService.FAQ_HAS_BEEN_TRIGGERED$.next({
          state: true,
          id: '',
          action: 'add'
        });
        this.DATA_IS_BEING_SENT = false;
        this.triggerCloseEvent.emit(true); // close modal
      }
    })
  }
}
