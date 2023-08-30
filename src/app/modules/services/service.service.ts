import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SERVICEACTIONSTATE, SERVICETYPE, UPDATED_SERVICE } from 'src/app/types/service.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URL = environment.API_URL;
  DATA_IS_BEING_SENT = new BehaviorSubject(false);
  SERVICE_HAS_BEEN_TRIGGERED$ = new BehaviorSubject<SERVICEACTIONSTATE>(<SERVICEACTIONSTATE>{ state: false, id: '', action: '' });

  constructor(private http: HttpClient) { }

  addElement(service: SERVICETYPE) {
    return this.http.post(`${this.API_URL}/services/`, service);
  }

  getElements(): any {
    return this.http.get(`${this.API_URL}/services`);
  }

  getElement(service_id: string): any {
    return this.http.get(`${this.API_URL}/services/${service_id}`);
  }

  updateElement(service_id: string, payload: UPDATED_SERVICE) {
    return this.http.put(`${this.API_URL}/services/${service_id}`, payload);
  }

  deleteElement(service_id: string): any {
    return this.http.delete(`${this.API_URL}/services/${service_id}`);
  }
}
