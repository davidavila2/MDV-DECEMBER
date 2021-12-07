import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, emptyProject } from '@mdv-december/core-data';
import { ProjectsFacade } from '@mdv-december/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-december-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  _project$: Observable<Project | undefined> = this.projectsFacade.selectedProject$;

  // public get project$(): Project {
  //   return this._project$;
  // }

  // public set project$(project: Project) {
  //   this._project$ = project;
  // }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsFacade: ProjectsFacade
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.projectsFacade.loadProject(id);
    })
  }

  goBackToProjects() {
    this.router.navigate(['/projects']);
  }
}
