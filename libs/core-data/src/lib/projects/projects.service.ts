import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '@mdv-december/core-data';
import { Observable } from 'rxjs';

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

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  getOne(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.getUrlWithId(id));
  }

  createProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.getUrl(), project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(this.getUrlWithId(project.id), project);
  }

  deleteProject(project: Project): Observable<Project> {
    return this.httpClient.delete<Project>(this.getUrlWithId(project.id));
  }
}
