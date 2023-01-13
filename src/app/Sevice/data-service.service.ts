import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private baseUrl = "http://localhost:8889/employee"
  private baseUrl1="http://localhost:8889/employee/{id}"

  constructor(private http : HttpClient) { }  
  
   user:User[];
  getUser(): Observable<any>{
    return this.http.get(this.baseUrl+"/all" )
    }

   getUsersById(id: any):Observable<User[]>{
      return this.http.get<User[]>(`${this.baseUrl1}`);
    }

    }

