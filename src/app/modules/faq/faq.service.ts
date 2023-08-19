import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FAQACTIONSTATE, FAQTYPE } from 'src/app/types/faq.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  API_URL = environment.API_URL;
  DATA_IS_BEING_SENT = new BehaviorSubject(false);
  FAQ_HAS_BEEN_TRIGGERED$ = new BehaviorSubject<FAQACTIONSTATE>(<FAQACTIONSTATE>{ state: false, id: '', action: '' });

  constructor(private http: HttpClient) { }

  addElement(faq: FAQTYPE) {
    return this.http.post(`${this.API_URL}/f-a-q/`, faq);
  }

  getElements(): any {
    return this.http.get(`${this.API_URL}/f-a-q`);
  }

  getElement(faq_id: string): any {
    return this.http.get(`${this.API_URL}/f-a-q/${faq_id}`);
  }

  deleteElement(faq_id: string): any {
    return this.http.delete(`${this.API_URL}/f-a-q/${faq_id}`);
  }
}
