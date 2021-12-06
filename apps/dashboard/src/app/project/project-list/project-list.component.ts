import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '@mdv-december/core-data';

@Component({
  selector: 'mdv-december-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  @Input() projects!: Project[] | null;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
