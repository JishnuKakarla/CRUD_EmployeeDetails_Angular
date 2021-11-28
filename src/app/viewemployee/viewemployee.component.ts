import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';
import { ViewemployeeService } from '../services/viewemployee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private service : ViewemployeeService,private router:Router,private http:HttpClient) { }

  employee:any;
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
  
  ngOnInit() {
    
    this.service.getpost()
    .subscribe((response:any)=>
      { 
        this.employee=response;
        console.log(this.employee);
      }
   );
  }

  Delete(emp :any)
  {
      this.service.deletepost(emp.empID)
      .subscribe((response:any)=>{
         let index = this.employee.indexOf(emp);
         this.employee.splice(index,1);
         console.log(emp);
       }
      );
  }

}

