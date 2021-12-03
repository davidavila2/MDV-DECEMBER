import { Injectable } from '@angular/core';

import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as ProjectsActions from './projects.actions';
import * as ProjectsSelectors from './projects.selectors';
import * as fromProjects from './projects.reducer';
import { Project } from '@mdv-december/core-data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsFacade {
  loaded$ = this.store.pipe(select(ProjectsSelectors.getProjectsLoaded));
  allProjects$ = this.store.pipe(select(ProjectsSelectors.getAllProjects));
  selectedProject$ = this.store.pipe(
    select(ProjectsSelectors.getSelected)
  );

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === ProjectsActions.createProject({} as any).type ||
        action.type === ProjectsActions.updateProject({} as any).type ||
        action.type === ProjectsActions.deleteProject({} as any).type
    )
  );

  constructor(
    private store: Store<fromProjects.ProjectsPartialState>,
    private actions$: ActionsSubject
  ) { }

  selectProject(selectedId: string) {
    this.dispatch(ProjectsActions.selectProject({ selectedId }));
  }

  loadProjects() {
    this.dispatch(ProjectsActions.loadProjects());
  }

  loadProject(project: Project) {
    this.dispatch(ProjectsActions.loadProject({ project }));
  }

  createProject(project: Project) {
    this.dispatch(ProjectsActions.createProject({ project }));
  }

  updateProject(project: Project) {
    this.dispatch(ProjectsActions.updateProject({ project }));
  }

  deleteProject(project: Project) {
    this.dispatch(ProjectsActions.deleteProject({ project }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
