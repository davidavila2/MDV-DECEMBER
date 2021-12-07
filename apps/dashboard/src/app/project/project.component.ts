import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyProject, Project } from '@mdv-december/core-data';
import { ProjectsFacade } from '@mdv-december/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-december-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  form!: FormGroup;
  selectedProject$ = this.projectsFacade.selectedProject$;
  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;

  constructor(
    private projectsFacade: ProjectsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.projectsFacade.loadProjects();
    this.projectsFacade.mutations$.subscribe(() => this.resetProjects())
  }

  resetProjects(): void {
    this.form.reset();
    this.selectProject(emptyProject);
  }

  selectProject(project: Project): void {
    this.projectsFacade.selectProject(project.id);
    this.form.patchValue(project);
  }

  create(): void {
    this.projectsFacade.createProject(this.form.value);
  }

  update(): void {
    this.projectsFacade.updateProject(this.form.value);
  }

  save(project: Project): void {
    project.id ? this.update() : this.create();
  }

  delete(project: Project): void {
    this.projectsFacade.deleteProject(project);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      importanceLevel: ['']
    });
  }
}
