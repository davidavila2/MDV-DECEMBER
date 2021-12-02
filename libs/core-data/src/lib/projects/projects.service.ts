import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@mdv-december/core-data';
// import { Observable } from 'rxjs';

const BASE_URL = 'https://server-30-x-30.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';

  constructor(private httpClient: HttpClient) { }

  getUrl(): string {
    return `${BASE_URL}${this.model}`;
  }

  getUrlWithId(id: number): string {
    return `${this.getUrl()}/${id}`;
  }

  getAll() {
    return this.httpClient.get(this.getUrl());
  }

  getOne(id: number) {
    return this.httpClient.get(this.getUrlWithId(id));
  }

  createProject(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  updateProject(project: Project) {
    return this.httpClient.patch(this.getUrlWithId(project.id), project);
  }

  deleteProject(project: Project) {
    return this.httpClient.delete(this.getUrlWithId(project.id));
  }
}
