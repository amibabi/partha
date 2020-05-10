import { Router } from '@angular/router';
import { ProjectService } from './../../service/project.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})


export class ProjectCreateComponent implements OnInit {  
  Employee:any = [];
  submitted = false;
  projForm: FormGroup;
  
  
  constructor(
  
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private projectService: ProjectService
  ) { 
    this.mainForm();
	this.readEmployee();
  }

  ngOnInit() { }
  
  readEmployee(){
    this.projectService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  mainForm() {
    this.projForm = this.fb.group({
      empid: ['', [Validators.required]],
      projectid: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
	  projectname: ['', [Validators.required]],
	  skills: ['', [Validators.required]],
      description: ['', [Validators.required]],
     
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.projForm.get('empid').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.projForm.controls;
  }

  onSubmit() {
	  console.log('Project successfully created222!')
    this.submitted = true;
    if (!this.projForm.valid) {
      return false;
	}
    else {
		console.log('Project successfully created444!')
      this.projectService.createProject(this.projForm.value).subscribe(
        (res) => {
          console.log('Project successfully created66666!')
        this.ngZone.run(() => this.router.navigateByUrl('/project-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
