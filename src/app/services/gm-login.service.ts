import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GmLoginService {

  constructor(private http: HttpClient) { }
  getGMDashbaord():Observable<any>{
    return this.http.get(environment.apiUrl+'getDashboardGM') 
  }
  // SM API
  getSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllSMfromGM') 
  }
  createSM(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createSMfromGM',data)
  }
  updateSM(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateSMfromGM/'+`${id}`,data);
  }
  updateSMStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSM/'+`${id}`,null);
  }

  // DSM API
  getDSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getALLDSMRecordsFromGM') 
  }
  createDSM(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createDSMfromGM',data)
  }
  updateDSM(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateDSMfromGM/'+`${id}`,data);
  }
  updateDSMStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusDSM/'+`${id}`,null);
  }

  //  SA API

  getSAList():Observable<any>{
    return this.http.get(environment.apiUrl+'getALLSARecordsFromGM') 
  }
  createSA(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createSAfromGM',data)
  }
  updateSA(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateSAfromGM/'+`${id}`,data);
  }
  updateSAStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSA/'+`${id}`,null);
  }
}
