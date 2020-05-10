import { Employee } from './../../model/Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})

export class EmployeeViewComponent implements OnInit {
  Projectdata:any = [];
  submitted = false;
  viewForm: FormGroup;
  employeeData: Employee[];
  
 EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { 
    
     
  }

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.viewForm = this.fb.group({
      empfname: ['', [Validators.required]],
      emplname: ['', [Validators.required]],
	  empcode: ['', [Validators.required]],
	  empdept: ['', [Validators.required]],
	  empemail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      empdesignation: ['', [Validators.required]],
      empcontact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose options with select-dropdown
  /* updateProfile(e) {
    this.viewForm.get('designation').setValue(e, {
      onlySelf: true
    })
  } */

  // Getter to access form control
  get myForm() {
    return this.viewForm.controls;
  }

  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe(data => {
      this.viewForm.setValue({
	  empfname: data['empfname'],
      emplname: data['emplname'],
	  empcode: data['empcode'],
	  empdept: data['empdept'],
	  empemail: data['empemail'],
      empdesignation: data['empdesignation'],
      empcontact: data['empcontact']
      });
    });
  }

 /* readProjectsdata(id){
    this.apiService.getProjectsdata(id).subscribe((data) => {
     this.Projectdata = data;
    })    
  }*/

  updateEmployee() {
    this.viewForm = this.fb.group({
     empfname: ['', [Validators.required]],
      emplname: ['', [Validators.required]],
	  empcode: ['', [Validators.required]],
	  empdept: ['', [Validators.required]],
	  empemail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      empdesignation: ['', [Validators.required]],
      empcontact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  /* onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/employees-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  } */

}