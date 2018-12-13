import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Student } from 'src/models/Student';
import { iif } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentProjectService {

  sc: number;

  student: Student;
  constructor(private http: Http) {
    this.sc = 0;
   }

  score(student) {
    this.student = student;
    this.sc = (this.student.anglais + this.student.francais + this.student.droit ) / 3 ;
    return this.sc;
   }

   getStudents() {
    return this.http.get('../assets/students.json').map(res => res.json());
   }

   rachat(student: Student) {
     if (this.score(student) >= 9 && this.score(student) < 10) {
        if (student.anglais < 8) {
            student.anglais = 8;
        }
        if (student.francais < 8) {
            student.francais = 8;
        }
        if (student.droit < 8) {
            student.francais = 8;
        }
     }
     return (student);
   }


}
