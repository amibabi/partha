import { Project } from './../../model/Project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from './../../service/project.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})

export class ProjectEditComponent implements OnInit {
  Employee:any = [];
  submitted = false;
  editForm1: FormGroup;
  projectData: Project[];
  //EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {	this.readEmployee();}

  ngOnInit() {
    this.updateProject();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProject(id);
    this.editForm1 = this.fb.group({
      empid: ['', [Validators.required]],
      projectid: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
	   projectname: ['', [Validators.required]],
	     skills: ['', [Validators.required]],
	    description: ['', [Validators.required]]
     
    })
  }

  readEmployee(){
    this.projectService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm1.get('empid').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm1.controls;
  }

  getProject(id) {
    this.projectService.getProject(id).subscribe(data => {
      this.editForm1.setValue({
	  empid: data['empid'],
     projectid: data['projectid'],
	  projectname: data['projectname'],
	  skills: data['skills'],
	  description: data['description']
      
      });
    });
  }

  updateProject() {
    this.editForm1 = this.fb.group({
      empid: ['', [Validators.required]],
      projectid: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
	   projectname: ['', [Validators.required]],
	     skills: ['', [Validators.required]],
	    description: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm1.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.projectService.updateProject(id, this.editForm1.value)
          .subscribe(res => {
            this.router.navigateByUrl('/project-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}