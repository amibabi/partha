import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  
  Projects:any = [];

  constructor(private projectService: ProjectService) { 
    this.readProject();
  }

  ngOnInit() {}

  readProject(){
    this.projectService.getProjects().subscribe((data) => {
     this.Projects = data;
    })    
  }

  removeProject(project, index) {
    if(window.confirm('Are you sure?')) {
        this.projectService.deleteProject(project._id).subscribe((data) => {
          this.Projects.splice(index, 1);
        }
      )    
    }
  }

  

}