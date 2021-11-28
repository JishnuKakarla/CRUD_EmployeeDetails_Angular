import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: any;

  constructor(private http : HttpClient,private router :  Router) { }

  ngOnInit(): void {
  }
  
  form = new FormGroup(
    {
      'empName': new FormControl(),
      'empAge': new FormControl(),
      'empSalary': new FormControl(),
      'empPhoneNumber': new FormControl(),
      'empAddress': new FormControl()
    }
  )

  Create()
  { 
    let body = {
      empName : this.form.value.empName,
      empAge : this.form.value.empAge,
      empSalary : this.form.value.empSalary,
      empPhoneNumber  : this.form.value.empPhoneNumber,
      empAddress : this.form.value.empAddress
    }
      this.http.post('http://localhost:8080/create',body)
      .subscribe(data => {
          console.log(data);
        })
        this.router.navigate(['/view']);
  }
}
