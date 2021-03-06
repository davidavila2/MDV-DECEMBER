import { Injectable } from '@angular/core';
import { Project, ProjectsService } from '@mdv-december/core-data';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence, fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as ProjectsActions from './projects.actions';
import { ProjectsPartialState } from './projects.reducer';

@Injectable()
export class ProjectsEffects {
  loadProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectsActions.loadProject),
    fetch({
      run: (action) => {
        this.projectsService
          .getOne(action.project.id)
          .pipe(
            map((project: Project) =>
              ProjectsActions.loadProjectSuccess({ project })
            )
          )
      },
      onError: (action, error) => console.log(error)
    })
  ));

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

  createProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectsActions.createProject),
    pessimisticUpdate({
      run: (action) => this.projectsService.createProject(action.project).pipe(
        map((project: Project) =>
          ProjectsActions.createProjectSuccess({ project })
        )
      ),
      onError: (action, error) => console.log(error)
    })
  ));

  updateProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectsActions.updateProject),
    pessimisticUpdate({
      run: (action) => this.projectsService.updateProject(action.project).pipe(
        map((project: Project) =>
          ProjectsActions.updateProjectSuccess({ project })
        )
      ),
      onError: (action, error) => console.log(error)
    })
  ));

  // deleteProject$ = createEffect(() => this.actions$.pipe(
  //   ofType(ProjectsActions.deleteProject),
  //   pessimisticUpdate({
  //     run: (action) => this.projectsService.deleteProject(action.project).pipe(
  //       map((project: Project) =>
  //         ProjectsActions.deleteProjectSuccess({ project })
  //       )
  //     ),
  //     onError: (action, error) => console.log(error)
  //   })
  // ));

  deleteProject$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(ProjectsActions.deleteProject, {
      run: (
        action: ReturnType<typeof ProjectsActions.deleteProject>,
        state: ProjectsPartialState
      ) => {
        return this.projectsService.deleteProject(action.project).pipe(
          map(() => ProjectsActions.deleteProjectSuccess({ project: action.project }))
        )
      },
      onError: (action: ReturnType<typeof ProjectsActions.deleteProject>, error) => console.log(error)
    })
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private dataPersistence: DataPersistence<ProjectsPartialState>,
  ) { }
}
