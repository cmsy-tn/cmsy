import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SERVICEACTIONSTATE, SERVICETYPE } from 'src/app/types/service.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URL = environment.API_URL;
  DATA_IS_BEING_SENT = new BehaviorSubject(false);
  SERVICE_HAS_BEEN_TRIGGERED$ = new BehaviorSubject<SERVICEACTIONSTATE>(<SERVICEACTIONSTATE>{ state: false, id: '', action: '' });

  constructor(private http: HttpClient) { }

  addElement(faq: SERVICETYPE) {
    return this.http.post(`${this.API_URL}/services/`, faq);
  }

  getElements(): any {
    return this.http.get(`${this.API_URL}/services`);
  }

  getElement(faq_id: string): any {
    return this.http.get(`${this.API_URL}/services/${faq_id}`);
  }

  // updateElement(faq_id: string, payload: UPDATED_FAQ) {
  //   return this.http.put(`${this.API_URL}/services/${faq_id}`, payload);
  // }

  deleteElement(faq_id: string): any {
    return this.http.delete(`${this.API_URL}/services/${faq_id}`);
  }
}
