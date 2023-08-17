import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FAQTYPE from 'src/app/types/faq';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  addElement(faq: FAQTYPE) {
    return this.http.post(`${this.API_URL}/faq/`, faq);
  }

  getElements(): any {
    return this.http.get(`${this.API_URL}/faq`);
  }

  getElement(faq_id: string): any {
    return this.http.get(`${this.API_URL}/faq/${faq_id}`);
  }

  deleteElement(faq_id: string): any {
    return this.http.delete(`${this.API_URL}/faq/${faq_id}`);
  }
}
