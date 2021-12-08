import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromProjects from './projects/projects.reducer';
import { ProjectsEffects } from './projects/projects.effects';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: 'Projects' }),
    StoreModule.forFeature(
      fromProjects.PROJECTS_FEATURE_KEY,
      fromProjects.reducer
    ),
    EffectsModule.forFeature([ProjectsEffects]),
  ],
  providers: [DataPersistence]
})
export class CoreStateModule { }
