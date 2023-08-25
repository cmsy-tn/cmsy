import { Component, Input } from '@angular/core';
import { SERVICETYPE } from 'src/app/types/service.type';

@Component({
  selector: 'cmsy-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {

  @Input() data!: SERVICETYPE;

}
