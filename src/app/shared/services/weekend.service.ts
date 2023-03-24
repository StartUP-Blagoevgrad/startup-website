import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class WeekendService {

    constructor(@Inject(HttpClient) private http: HttpClient) { 

    }

    // This method returns a list of departments based on the passed "departmentName" parameter.
    getDepartments() {
        let filePath = 'weekend.json';
        
        // Return the the information of the required department.
        return this.http.get(`assets/weekend23/${filePath}`);
    }
}