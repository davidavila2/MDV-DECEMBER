import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectItemComponent } from './project/project-item/project-item.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { MaterialModule } from '@mdv-december/material';
import { CoreDataModule } from '@mdv-december/core-data';
import { CoreStateModule } from '@mdv-december/core-state';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
