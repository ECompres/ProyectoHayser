import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { student } from 'src/app/models/student';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  providers: [StudentService]
})
export class LobbyComponent implements OnInit {

  public students: student[];
  public student: student;
  constructor(private _studentService: StudentService) {

  }

  getStudents() {
    this._studentService.getStudents().subscribe((res) => {
      if (res) {
        this.students = res;
        console.log(this.students);
      }
    },
      (err) => {
        console.log(err);
      })
  }
  admitir(stud, id) {
    this.student = stud;
    this.student.Status = true;
    this._studentService.updateStudent(stud).subscribe((res) => {
      if (res) this.getStudents();
    },
      err => console.log(err));
  }

  rechazar(id) {
    this._studentService.deleteStudent(id).subscribe((res) => {
      if (res)
        console.log("admision rechazada");
      this.getStudents();
    },
      (err) => {
        console.log(err);
      })
  }
  ngOnInit() {
    this.getStudents();

  }

}
