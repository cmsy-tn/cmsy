import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { SERVICETYPE } from 'src/app/types/service.type';

@Component({
  selector: 'cmsy-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.scss']
})
export class ServiceDataComponent implements OnInit {

  SERVICE_DATA!: SERVICETYPE[];
  isFetchingData: boolean = false;

  constructor(private servicesService: ServiceService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.isFetchingData = true;
    this.servicesService.getElements().subscribe({
      next: (response: SERVICETYPE[]) => {
        this.SERVICE_DATA = response;
        this.isFetchingData = false;
      }
    })
  }

}
