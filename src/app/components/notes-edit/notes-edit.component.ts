import {Notes } from './../../model/Notes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NotesService } from './../../service/notes.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})

export class NotesEditComponent implements OnInit {
  Employee:any = [];
  submitted = false;
  editForm3: FormGroup;
  notesData: Notes[];
  //EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private notesService: NotesService,
    private router: Router
  ) {	this.readEmployee();}

  ngOnInit() {
    this.updateNote();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getNote(id);
    this.editForm3 = this.fb.group({
      empid: ['', [Validators.required]],
     notesname: ['', [Validators.required]],
	    description: ['', [Validators.required]]
     
    })
  }

  readEmployee(){
    this.notesService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm3.get('empid').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm3.controls;
  }

  getNote(id) {
    this.notesService.getNote(id).subscribe(data => {
      this.editForm3.setValue({
	  empid: data['empid'],
    notesname: data['notesname'],
	  description: data['description']
      
      });
    });
  }

  updateNote() {
    this.editForm3 = this.fb.group({
      empid: ['', [Validators.required]],
      notesname: ['', [Validators.required]],
     description: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm3.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.notesService.updateNote(id, this.editForm3.value)
          .subscribe(res => {
            this.router.navigateByUrl('/notes-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}