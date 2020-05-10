import { Component, OnInit } from '@angular/core';
import {NotesService } from './../../service/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})

export class NotesListComponent implements OnInit {
  
 Notes:any = [];

  constructor(private notesService: NotesService) { 
    this.readNotes();
  }

  ngOnInit() {}

  readNotes(){
    this.notesService.getNotes().subscribe((data) => {
     this.Notes = data;
    })    
  }

  removeNotes(notes, index) {
    if(window.confirm('Are you sure?')) {
        this.notesService.deleteNotes(notes._id).subscribe((data) => {
          this.Notes.splice(index, 1);
        }
      )    
    }
  }

  

}