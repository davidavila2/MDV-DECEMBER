import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/:id', component: ProjectItemComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
