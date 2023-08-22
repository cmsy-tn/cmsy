import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FaqService } from '../../faq.service';

@Component({
  selector: 'cmsy-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss']
})
export class FaqFormComponent implements OnInit {
  FAQ_FORM!: FormGroup;

  constructor(
    private faqService: FaqService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.constructForm();
  }

  constructForm() {
    this.FAQ_FORM = this.fb.group({
      FAQ: this.fb.array([])
    })
  }

  get GET_FORM_ARRAY(): FormArray {
    return this.FAQ_FORM.get('FAQ') as FormArray;
  }

  addFormGroupToArray() {
    const NEW_FORM_GROUP = this.fb.group({
      question: [null, Validators.required],
      answer: [null, Validators.required],
    });

    this.GET_FORM_ARRAY.push(NEW_FORM_GROUP);
  }

  deleteGroupFromArray(index: number) {
    this.GET_FORM_ARRAY.removeAt(index);
  }

  saveFAQS() {
    this.faqService.DATA_IS_BEING_SENT.next(true); // updating a shared status to lock form
    const data = this.FAQ_FORM.value.FAQ;

    this.faqService.addElement(data).subscribe({
      next: (response: any) => {
        if (response === 1) {
          this.faqService.DATA_IS_BEING_SENT.next(false);
          this.faqService.FAQ_HAS_BEEN_TRIGGERED$.next({
            state: true,
            id: '',
            action: 'add'
          });
        }
      }
    })
  }
}
