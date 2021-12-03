import { Component, OnInit } from '@angular/core';
import { ProjectsFacade } from '@mdv-december/core-state';
import { Observable } from 'rxjs';
import { Project } from '@mdv-december/core-data';

@Component({
  selector: 'mdv-december-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  projects$: Observable<Project[]> = this.projects.allProjects$

  constructor(private projects: ProjectsFacade) { }

  ngOnInit() {
    this.projects.loadProjects()
  }
}
