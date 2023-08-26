import { Component, Input } from '@angular/core';
import { SERVICETYPE } from 'src/app/types/service.type';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'cmsy-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {

  @Input() data!: SERVICETYPE;
  @Input() postActionID!: string;

  constructor(private serviceService: ServiceService) { }

  delete(service_id: string) {
    this.serviceService.deleteElement(service_id).subscribe({
      next: (response: number) => {
        if (response !== 0) {
          alert('⚠️ FSERVICE has been successfully deleted! 🗑️');
          this.serviceService.SERVICE_HAS_BEEN_TRIGGERED$.next({
            state: true,
            id: service_id,
            action: 'del'
          });
        }
      }
    })
  }
  update(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
