import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmLoginService {

  constructor(private http: HttpClient) { }
  getSMDashbaord():Observable<any>{
    return this.http.get(environment.apiUrl+'getDashboardInSM')
  }
  // DSM AP
  getDSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllDSMUnderSM') 
  }
  updateDSMstatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusDSM/'+`${id}`,null);
  }
  // SA AP
  getSAList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllSAUnderSM') 
  }
  updateSAstatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSA/'+`${id}`,null);
  }
}
