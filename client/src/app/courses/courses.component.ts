import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
import { Course } from '../shared/models/courses.model'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {


  selectedCourse: Course = null;

  courses: Course[] = []

  // Here we are injecting the coursesService
  constructor(private coursesService: CoursesService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses()
  }


  resetSelectedCourse() {
    const emptyCourse = {
      _id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    // this.selectedCourse = this.coursesService.all();
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.snack.open('Course Selected', 'Success', { duration: 500 })
    console.log(course)
  }

  refreshCourse() {
    this.resetSelectedCourse()
    this.loadCourses()
  }

  loadCourses() {
    this.coursesService.all().subscribe(remoteCourses => {
      this.courses = remoteCourses['courses']
      // this.courses = JSON.parse(remoteCourses)
    })
  }

  saveCourse(course) {
    if (course._id) {
      console.log('Update')
      console.log(course)
      this.coursesService.update(course).subscribe(res => this.refreshCourse())
      this.snack.open('Course Updated', 'Success', { duration: 1000 })
    } else {
      console.log('Create')
      this.coursesService.create(course).subscribe(res => this.refreshCourse())
      this.snack.open('New Course Created', 'Success', { duration: 1000 })
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId).subscribe(res => this.refreshCourse())
    this.snack.open('Course Deleted!!', 'Success', { duration: 1000 })
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
