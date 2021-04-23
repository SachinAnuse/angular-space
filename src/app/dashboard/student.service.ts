import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../entity/education';
import { Experience } from '../entity/experience';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  user
  loadCourses(studentId):Observable<any>{
    return this.http.get("http://localhost:8282/my-courses/"+studentId);

  }
  loadProfile(studentId):Observable<any>{
    return this.http.get("http://localhost:8282/student-profile/"+studentId);
  }

  loadEducation(studentId):Observable<Education>{
    return this.http.get<Education>("http://localhost:8282/student-education/"+studentId);
  }

  loadExperience(studentId):Observable<Experience>{
    return this.http.get<Experience>("http://localhost:8282/student-experience/"+studentId);
  }
  loadAddress(studentId):Observable<any>{
    return this.http.get("http://localhost:8282/student-address/"+studentId);
  }

  addEducationDetails(education):Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'id':localStorage.getItem('id')
         });    
         let options = {
        headers: httpHeaders
         }; 
    return  this.http.post("http://localhost:8282/add-update-education",education,options);
  }

  addExperienceDetails(experience):Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'id':localStorage.getItem('id')
         });    
         let options = {
        headers: httpHeaders
         }; 
    return  this.http.post("http://localhost:8282/add-update-experience",experience,options);
  }
  addAddressDetails(address):Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'id':localStorage.getItem('id')
         });    
         let options = {
        headers: httpHeaders
         }; 
    return  this.http.post("http://localhost:8282/add-update-address",address,options);
  }
}
