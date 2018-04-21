import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Grade{
    constructor(
        public http: HttpClient
    ){}

    getGrades(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
    
}