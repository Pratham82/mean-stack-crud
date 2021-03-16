import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/courses.model'
import { environment } from '../../../environments/environment'
const { SERVER_URL } = environment
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) { }
  private model = 'courses'

  all() {
    return this.http.get(this.getUrl())
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course)
  }

  find(courseId: string) {
    return this.http.get(`${this.getUrlById(courseId)}`)
  }

  update(course: Course) {
    return this.http.put(this.getUrlById(course._id), course)
  }

  delete(courseId: string) {
    return this.http.delete(`${this.getUrlById(courseId)}`)
  }

  getUrl() {
    return `${SERVER_URL}${this.model}`
  }

  getUrlById(id: string) {
    return `${this.getUrl()}/${id}`
  }

}
