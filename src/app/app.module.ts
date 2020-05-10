import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HobbiListComponent } from './components/hobbi-list/hobbi-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { HobbiEditComponent } from './components/hobbi-edit/hobbi-edit.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { HobbiCreateComponent } from './components/hobbi-create/hobbi-create.component';
import { NotesCreateComponent } from './components/notes-create/notes-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { ProjectService } from './service/project.service';
import { HobbiService } from './service/hobbi.service';
import { NotesService } from './service/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    ProjectCreateComponent,
    HobbiCreateComponent,
	  NotesCreateComponent,
    EmployeeListComponent,
    ProjectListComponent,
    HobbiListComponent,
    NotesListComponent,
    EmployeeEditComponent,
    ProjectEditComponent,
    HobbiEditComponent,
    NotesEditComponent,
	EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService,ProjectService,HobbiService,NotesService],
  bootstrap: [AppComponent]
})

export class AppModule { }