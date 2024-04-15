import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  apiurl='http://localhost:3000/level/';
  constructor(private http: HttpClient) { }

  createLevel(data:any):Observable<any>{
    return this.http.post<any>(this.apiurl,data)
  }
    
  getLevelList():Observable<any>{
    return this.http.get(this.apiurl) 
  }

  updateLevel(id: number, data:any):Observable<any>{
    return this.http.put(this.apiurl+`${id}`,data);
  }
  
  deleteLevel(id: any):Observable<any>{
    return this.http.delete(this.apiurl+`${id}`);
  }
}
