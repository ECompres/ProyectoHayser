import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { student } from '../models/student';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';


@Injectable()
export class StudentService {

    public url: string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    getStudents(): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url + "student", { headers: headers })
    }
    getStudent(id): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url + "student/" + id, { headers: headers })
    }
    saveStudent(student: student): Observable<any> {
        let params = JSON.stringify(student);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url + "student", params, { headers: headers })
    }
    updateStudent(student: student): Observable<any> {
        let params = JSON.stringify(student);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(this.url + "student/" + student.Id, params, { headers: headers })
    }
    deleteStudent(id): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.delete(this.url + "student/" + id, { headers: headers });
    }
}