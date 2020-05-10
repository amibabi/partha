import {Hobbi } from './../../model/Hobbi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HobbiService } from './../../service/hobbi.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-hobbi-edit',
  templateUrl: './hobbi-edit.component.html',
  styleUrls: ['./hobbi-edit.component.css']
})

export class HobbiEditComponent implements OnInit {
  Employee:any = [];
  submitted = false;
  editForm2: FormGroup;
  hobbiData: Hobbi[];
  //EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private hobbiService: HobbiService,
    private router: Router
  ) {	this.readEmployee();}

  ngOnInit() {
    this.updateHobbi();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getHobbi(id);
    this.editForm2 = this.fb.group({
      empid: ['', [Validators.required]],
     	hobbiname: ['', [Validators.required]],
	    description: ['', [Validators.required]]
     
    })
  }

  readEmployee(){
    this.hobbiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm2.get('empid').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm2.controls;
  }

  getHobbi(id) {
    this.hobbiService.getHobbi(id).subscribe(data => {
      this.editForm2.setValue({
	  empid: data['empid'],
    hobbiname: data['hobbiname'],
	  description: data['description']
      
      });
    });
  }

  updateHobbi() {
    this.editForm2 = this.fb.group({
      empid: ['', [Validators.required]],
      hobbiname: ['', [Validators.required]],
     description: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm2.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.hobbiService.updateHobbi(id, this.editForm2.value)
          .subscribe(res => {
            this.router.navigateByUrl('/hobbi-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}