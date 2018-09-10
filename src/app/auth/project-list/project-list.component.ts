import { Component, OnInit } from '@angular/core';
import { ProjectListservices } from './services/project-list.services';
import { Project } from './models/project.models';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  isLoading = true;
  projects: Array<Project>;
   
  constructor(private _projectListService: ProjectListservices) { }

  ngOnInit() {
	 this._projectListService.getAll().subscribe(
	 (data: Project[]) => {
	  	//next()
	  	this.projects = data;
	  },
	  err => {
	  	console.error(err);
	  },
	  () => {
	  	console.log('Finished!');
	  }
 	);	
}
}