import { Injectable } from '@angular/core';
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

    testService(){
        return "Algo";
    }

    getStudents(): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url, { headers: headers })
    }
    getStudent(id): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.get(this.url + id, { headers: headers })
    }
    saveStudent(student: student): Observable<any> {
        let params = JSON.stringify(student);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url, params, { headers: headers })
    }
    updateStudent(student: student): Observable<any> {
        let params = JSON.stringify(student);
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(this.url + student.id, params, { headers: headers })
    }
    deleteStudent(id): Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.delete(this.url+ id, { headers: headers });
    }
}