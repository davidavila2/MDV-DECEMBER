import { Injectable } from '@angular/core';
import { Project, ProjectsService } from '@mdv-december/core-data';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { iif } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as ProjectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {

  loadProjects$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectsActions.loadProjects),
    fetch({
      run: () =>
        this.projectsService
          .getAll()
          .pipe(
            map((projects: Project[]) =>
              ProjectsActions.loadProjectsSuccess({ projects })
            )
          ),
      onError: (action, error) => console.log(error)
    })
  ));

  loadProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectsActions.loadProject),
    fetch({
      run: (action) =>
        this.projectsService
          .getOne(action.project.id)
          .pipe(
            map((project: Project) =>
              ProjectsActions.loadProjectSuccess({ project })
            )
          ),
      onError: (action, error) => console.log(error)
    })
  ));

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService
  ) { }
}
