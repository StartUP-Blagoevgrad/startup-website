import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

    constructor(@Inject(HttpClient) private http: HttpClient) { 

    }

    // This method returns a list of departments based on the passed "departmentName" parameter.
    getDepartments(departmentName: String) {
        let filePath = '';
        
        // Set the "filePath" based on the passed "departmentName" parameter - NOT case sensitive.
        switch (departmentName.toLowerCase()) {       
            case 'it':
                filePath = 'it.json';
                break;
            case 'marketing':
                filePath = 'marketing.json';
                break;
            case 'sponsorship':
                filePath = 'sponsorship.json';
                break;
            case 'speakers':
                filePath = 'speakers.json';
                break;
            case 'board':
                filePath = 'board.json';
                break;
            default:
                // Throw an error if an invalid departmentName is passed.
                throw new Error(`Invalid department name: ${departmentName}`);
        }
        
        // Return the the information of the required department.
        return this.http.get(`assets/team/${filePath}`);
    }
}