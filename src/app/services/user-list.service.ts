import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }
  apiurl='http://localhost:3000/user/';

  getUserList():Observable<any>{
    return this.http.get(this.apiurl) 
  }
  // updateUser(id: number, data:any):Observable<any>{
  //   return this.http.put(this.apiurl+`${id}`,data);
  // }
  updateUser(id: number, data:any):Observable<any>{
    return this.http.put(this.apiurl+`${id}`,data);
  }

// For country code




}
