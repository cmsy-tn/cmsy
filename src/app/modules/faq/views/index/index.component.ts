import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import FAQTYPE from 'src/app/types/faq';
import { FaqService } from '../../faq.service';

@Component({
  selector: 'cmsy-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  FAQ_DATA: FAQTYPE[] = []
  FAQ_FORM!: FormGroup;
  isFetchingData: boolean = true;

  constructor(
    private fb: FormBuilder,
    private faqService: FaqService
  ) { }

  ngOnInit(): void {
    this.constructForm();
    this.fetchData();
  }

  constructForm() {
    this.FAQ_FORM = this.fb.group({
      FAQ: this.fb.array([])
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
}
