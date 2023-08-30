import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SERVICETYPE } from 'src/app/types/service.type';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'cmsy-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  SERVICE_FORM!: FormGroup;
  hasFAQs: boolean = false;
  DATA_IS_BEING_SENT: boolean = false;
  @Output() triggerCloseEvent = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicesService: ServiceService
  ) { }

  ngOnInit(): void {
    this.buildServiceForm();
    this.servicesService.DATA_IS_BEING_SENT.subscribe({
      next: (value: boolean) => { this.DATA_IS_BEING_SENT = value }
    })
  }

  buildServiceForm() {
    this.SERVICE_FORM = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      call_to_action: [null, Validators.required],
      subServices: [null, Validators.required],
      service_has_faq: [false, Validators.required]
    })
  }

  saveService() {
    // LOADER
    this.servicesService.DATA_IS_BEING_SENT.next(true);
    // TMP FORM DATA
    const DATA: SERVICETYPE = {
      ...this.SERVICE_FORM.value,
      service_faqs: []
    };
    // DATA SENT TO BACKEND
    this.servicesService.addElement(DATA).subscribe({
      next: (response: any) => {
        if (response) {
          this.servicesService.DATA_IS_BEING_SENT.next(false);
          this.servicesService.SERVICE_HAS_BEEN_TRIGGERED$.next({
            state: true,
            id: '',
            action: 'add'
          });
        }
      }
    })
  }
}
