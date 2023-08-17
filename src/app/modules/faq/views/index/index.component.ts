import { Component } from '@angular/core';
import FAQTYPE from 'src/app/types/faq';

@Component({
  selector: 'cmsy-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  FAQ_DATA: FAQTYPE[] = [
    {
      question: "string",
      answer: "string",
      hasCategory: true,
      category: "string"
    },
    {
      question: "string",
      answer: "string",
      hasCategory: true,
      category: "string"
    },
    {
      question: "string",
      answer: "string",
      hasCategory: true,
      category: "string"
    },
  ]
}
