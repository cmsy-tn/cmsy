import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private servicesService: ServiceService
  ) { }

  ngOnInit(): void {
    this.buildServiceForm();
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
    const DATA: SERVICETYPE = {
      ...this.SERVICE_FORM.value,
      service_faqs: []
    };
    this.servicesService.addElement(DATA).subscribe({
      next: (response: any) => {
        if (response)
          return 1;
      }
    })
  }
}
