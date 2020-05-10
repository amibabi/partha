import { Router } from '@angular/router';
import { NotesService } from './../../service/notes.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.css']
})


export class NotesCreateComponent implements OnInit {  
  Employee:any = [];
  submitted = false;
  notesForm: FormGroup;
  
  
  constructor(
  
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private notesService: NotesService
  ) { 
    this.mainForm();
	this.readEmployee();
  }

  ngOnInit() { }
  
  readEmployee(){
    this.notesService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  mainForm() {
    this.notesForm = this.fb.group({
      empid: ['', [Validators.required]],
   	  notesname: ['', [Validators.required]],
      description: ['', [Validators.required]],
     
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.notesForm.get('empid').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.notesForm.controls;
  }

  onSubmit() {
	  console.log('hobbi successfully created222!')
    this.submitted = true;
    if (!this.notesForm.valid) {
      return false;
	}
    else {
		console.log('hobbi successfully created444!')
      this.notesService.createNotes(this.notesForm.value).subscribe(
        (res) => {
          console.log('hobbi successfully created66666!')
         this.ngZone.run(() => this.router.navigateByUrl('/notes-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
