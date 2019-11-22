import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public students: student;
  public confirmPassword: string;
  public p: string;
  constructor(
    private _studentService: StudentService
  ) {
    this.students = new student("", "", "", "", "", "", "", "", "", "", "", "", "", "");
    this.confirmPassword = "";
  }


  onSubmit(form) {
    console.log(this.students);
    console.log(form);

    this._studentService.saveStudent(this.students).subscribe(
      (res) => {
        alert("El estudiante registrado para el proceso de admision");
        console.log(res);
        form.reset();
      },
      (err) => {
        alert("El estudiante no pudo ser registrado");

      }
    )
  }
  getStudents() {
    this._studentService.getStudents().subscribe((res) => {
      if (res.student) {
        this.students = res.students;
      }
    },
      (err) => {
        console.log(err);
      })
  }
  ngOnInit() {
    this.getStudents();
    console.log(this.getStudents());
  }

}
