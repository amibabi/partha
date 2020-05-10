import { Router } from '@angular/router';
import { HobbiService } from './../../service/hobbi.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-hobbi-create',
  templateUrl: './hobbi-create.component.html',
  styleUrls: ['./hobbi-create.component.css']
})


export class HobbiCreateComponent implements OnInit {  
  Employee:any = [];
  submitted = false;
  hobbiForm: FormGroup;
  
  
  constructor(
  
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private hobbiService: HobbiService
  ) { 
    this.mainForm();
	this.readEmployee();
  }

  ngOnInit() { }
  
  readEmployee(){
    this.hobbiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  mainForm() {
    this.hobbiForm = this.fb.group({
      empid: ['', [Validators.required]],
   	  hobbiname: ['', [Validators.required]],
      description: ['', [Validators.required]],
     
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.hobbiForm.get('empid').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.hobbiForm.controls;
  }

  onSubmit() {
	  console.log('hobbi successfully created222!')
    this.submitted = true;
    if (!this.hobbiForm.valid) {
      return false;
	}
    else {
		console.log('hobbi successfully created444!')
      this.hobbiService.createHobbi(this.hobbiForm.value).subscribe(
        (res) => {
          console.log('hobbi successfully created66666!')
       this.ngZone.run(() => this.router.navigateByUrl('/hobbi-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
