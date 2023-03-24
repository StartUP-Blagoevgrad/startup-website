import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {

  constructor() { }

  selectedEndpoint: string = '';

  ngOnInit() {
    this.loadDepartment("/conference");
  }

  loadDepartment(endpoint: string) {
    this.selectedEndpoint = endpoint;
  }

}