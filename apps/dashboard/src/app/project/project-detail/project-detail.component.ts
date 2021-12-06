import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Project } from '@mdv-december/core-data';

@Component({
  selector: 'mdv-december-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  @Input() set project(project: Project | undefined | null) {
    if (project) this.originalTitle = project.title;
    this.currentProject = Object.assign({}, project);
  }
  @Input() form!: FormGroup;

  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter();

  currentProject!: Project;
  originalTitle!: string;
}
