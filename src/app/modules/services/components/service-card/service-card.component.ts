import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SERVICETYPE, UPDATED_SERVICE } from 'src/app/types/service.type';
import { ServiceService } from '../../service.service';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'cmsy-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {

  @Input() data!: SERVICETYPE;
  SERVICE_LOCAL_STATE: boolean = false;
  SERVICE_IS_IN_EDIT_MODE: boolean = false;

  // EDIT MODE VALUES
  @ViewChild('title') title!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('call_to_action') call_to_action!: ElementRef;
  @ViewChild('subServices') subServices!: ElementRef;
  @ViewChild('service_has_faq') service_has_faq!: NzCheckboxComponent;

  constructor(private serviceService: ServiceService) { }

  delete(service_id: string) {
    this.SERVICE_LOCAL_STATE = true;
    this.serviceService.deleteElement(service_id).subscribe({
      next: (response: number) => {
        if (response !== 0) {
          alert('⚠️ FSERVICE has been successfully deleted! 🗑️');
          this.serviceService.SERVICE_HAS_BEEN_TRIGGERED$.next({
            state: true,
            id: service_id,
            action: 'del'
          });
          this.SERVICE_LOCAL_STATE = false;
        }
      }
    })
  }
  update(service_id: string) {
    this.SERVICE_LOCAL_STATE = true;
    let updated_values: UPDATED_SERVICE = {
      title: this.title.nativeElement.value,
      description: this.description.nativeElement.value,
      call_to_action: this.call_to_action.nativeElement.value,
      subServices: this.subServices.nativeElement.value,
      service_has_faq: this.service_has_faq.nzChecked,
    };

    this.serviceService.updateElement(service_id, updated_values).subscribe({
      next: () => {
        alert('✅ FAQ has been successfully updated!');
        this.serviceService.SERVICE_HAS_BEEN_TRIGGERED$.next({
          state: true,
          id: service_id,
          action: 'update'
        });
        this.SERVICE_LOCAL_STATE = false;
        this.SERVICE_IS_IN_EDIT_MODE = false;
      }
    })
  }

}
