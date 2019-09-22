import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallesServiceService {

  constructor( protected http: HttpClient ) { }
  getCalles() {

    return this.http.get('http://localhost:3000/calles?opc=1 ');

}
}
