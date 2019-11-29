import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { student } from 'src/app/models/student';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {



  public students: student[];
  public p: string;
  public e: string;
  constructor(
    private _student: StudentService, private _auth: AuthService
  ) {

  }

  test() {
    this._student.testService();
  }
  getStudents() {
    this._student.getStudents().subscribe((res) => {
      if (res) {
        this.students = res;
        console.log(this.students);
      }
    },
      (err) => {
        console.log(err);
      })
  }
  onSubmit() {
    for (let i = 0; i < this.students.length; i++) {
      if (this.e == this.students[i].Email) {
        alert("Si");
      }
      else {
        alert("no");
      }
    }
  }
  logIn(email: string, password: string) {
    this._auth.logIn(email, password).subscribe((res) => {
      console.log("Logeado")
    }, (err) => {
      console.log(err);
    })
  }
  ngOnInit() {
    this.test();
    this.getStudents();
  }

}
