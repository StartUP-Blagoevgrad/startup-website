import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  selectedEndpoint: string = ''; // Default endpoint.
  departmentData: any; // Placeholder for department data.

  // Social media icons.
  linkedInIcon = faLinkedin;
  emailIcon = faEnvelope;

  constructor(private departmentService: DepartmentService) {}

  // Load the "board" information when the page is first initialized.
  ngOnInit() {
    this.loadDepartment("/board");
  }

  loadDepartment(endpoint: string) {
    this.selectedEndpoint = endpoint;
    switch (endpoint) {
      case '/speakers':
        this.departmentService.getDepartments("speakers").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/it':
        this.departmentService.getDepartments("it").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/marketing':
        this.departmentService.getDepartments("marketing").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/board':
        this.departmentService.getDepartments("board").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/sponsorship':
        this.departmentService.getDepartments("sponsorship").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      default:
        console.error('Invalid endpoint:', endpoint);
        break;
    }
  }
}
