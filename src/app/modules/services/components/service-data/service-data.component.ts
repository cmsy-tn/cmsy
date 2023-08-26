import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { SERVICETYPE } from 'src/app/types/service.type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmsy-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.scss']
})
export class ServiceDataComponent implements OnInit {

  SERVICE_DATA!: SERVICETYPE[];
  isFetchingData: boolean = false;
  POST_ACTION_ELEMENT: string = '';

  constructor(
    private servicesService: ServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkForPostActionRouting();
    this.fetchData()
  }

  checkForPostActionRouting() {
    this.route.queryParams.subscribe({
      next: (value: any) => {
        if (value) this.POST_ACTION_ELEMENT = value.created
      }
    })
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
