import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from '../entity/course'
import { Student } from '../entity/student'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor (private http: HttpClient) {}

  allStudents (): Observable<Student> {
    return this.http.get<Student>('http://localhost:8282/all-student')
  }

  allCourses (): Observable<Course> {
    return this.http.get<Course>('http://localhost:8282/all-courses')
  }

  studentById (id): Observable<Student> {
    let httpHeaders = new HttpHeaders({
      id: id
    })
    let options = {
      headers: httpHeaders
    }
    return this.http.get<Student>('http://localhost:8282/students',options)
  }

  courseById(id):Observable<Course>{
    let httpHeaders = new HttpHeaders({
      id: id
    })
    let options = {
      headers: httpHeaders
    }
    return this.http.get<Course>('http://localhost:8282/courses',options);
  }

  updateCourse(course):Observable<any>{
       let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
         });    
         let options = {
        headers: httpHeaders
         }; 
    return this.http.post("http://localhost:8282/update-course",course,options);
  }
  updateStudent(student):Observable<any>{
    let httpHeaders = new HttpHeaders({
   'Content-Type' : 'application/json'
      });    
      let options = {
     headers: httpHeaders
      }; 
 return this.http.post("http://localhost:8282/update-student",student,options);
}
}
