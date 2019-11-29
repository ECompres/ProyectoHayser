import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';


@Injectable()
export class AuthService {

    public url: string;
   
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    logIn(username: string, password: string):Observable<any> {
        let headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url, {Email: username,Password: password},{headers:headers});

    }
}