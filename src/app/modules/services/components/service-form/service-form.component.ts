import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SERVICETYPE } from 'src/app/types/service.type';

@Component({
  selector: 'cmsy-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  SERVICE_FORM!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildServiceForm();
  }

  buildServiceForm() {
    this.SERVICE_FORM = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      call_to_action: [null, Validators.required],
      subServices: [null, Validators.required],
    })
  }

  saveService() {
    const tempFAQ = {
      id: "string",
      question: "string",
      answer: "string",
      hasCategory: false,
      category: "string",
      date: new Date(),
    }
    const DATA: SERVICETYPE = {
      ...this.SERVICE_FORM.value,
      service_faqs: [tempFAQ]
    };
    console.log(DATA);

  }
}
