import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/:id', component: ProjectItemComponent },
  { path: '**', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
