import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updatEemployee.component.html',
  styleUrls: ['./updateEmployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  employee:any;
  empID: any;

  constructor(private route : ActivatedRoute,private router  : Router,private http : HttpClient) { }

  ngOnInit() {
    console.log(this.route);
    this.route.paramMap.subscribe((Params:any) =>{
      this.empID = Params.get('empID');
      console.log(this.empID);
    });
    this.getemployeedata(this.empID);
  }

  form = new FormGroup(
    { 
      'empID' : new FormControl(),
      'empName': new FormControl(),
      'empAge': new FormControl(),
      'empSalary': new FormControl(),
      'empPhoneNumber': new FormControl(),
      'empAddress': new FormControl()
    }
  )

  Update()
  {
    let body = {
      empID : this.form.value.empID,
      empName : this.form.value.empName,
      empAge : this.form.value.empAge,
      empSalary : this.form.value.empSalary,
      empPhoneNumber  : this.form.value.empPhoneNumber,
      empAddress : this.form.value.empAddress
    }
    this.http.put('http://localhost:8080/update'+'/'+this.empID,body)
      .subscribe((data :any)=> {
          console.log(data);
        })
        this.router.navigate(['/view']);
  }

  async getemployeedata(empID : any)
  {
    let x = await this.http.get('http://localhost:8080/findbyid'+'/'+this.empID).toPromise();
    this.employee = x;
    console.log(x);
  }

}
