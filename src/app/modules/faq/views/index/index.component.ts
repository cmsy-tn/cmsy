import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FaqService } from '../../faq.service';


@Component({
  selector: 'cmsy-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

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
      question__control: [null, Validators.required],
      answer__control: [null, Validators.required],
    });

    this.GET_FORM_ARRAY.push(NEW_FORM_GROUP);
  }

  deleteGroupFromArray(index: number) {
    this.GET_FORM_ARRAY.removeAt(index);
  }

  saveFAQS() {
    this.faqService.addElement(this.FAQ_FORM.value.FAQ).subscribe({
      next: () => {
        // @TODO add success message
        // @TODO add  logic in service to handle sending an array of data
      }
    })
  }
}
