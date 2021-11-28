import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewemployeeService {
  
  constructor(private http : HttpClient) { }
  
  getpost()
  {
    return this.http.get('http://localhost:8080/read');
  }
  deletepost(empID: any)
  {
    return this.http.delete('http://localhost:8080/delete'+'/'+empID);
  }
}
