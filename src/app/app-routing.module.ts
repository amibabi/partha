import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { HobbiCreateComponent } from './components/hobbi-create/hobbi-create.component';
import { NotesCreateComponent } from './components/notes-create/notes-create.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { HobbiEditComponent } from './components/hobbi-edit/hobbi-edit.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { HobbiListComponent } from './components/hobbi-list/hobbi-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'create-project', component: ProjectCreateComponent },
  { path: 'create-hobbi', component: HobbiCreateComponent },
   { path: 'create-notes', component: NotesCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'edit-project/:id', component: ProjectEditComponent },
  { path: 'edit-hobbi/:id', component: HobbiEditComponent },
  { path: 'edit-notes/:id', component:NotesEditComponent },
   { path: 'view-employee/:id', component: EmployeeViewComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'project-list', component: ProjectListComponent },
 { path: 'hobbi-list', component: HobbiListComponent },
 { path: 'notes-list', component: NotesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

