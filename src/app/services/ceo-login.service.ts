import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CeoLoginService {

  constructor(private http: HttpClient) { }

  getCEODashbaord():Observable<any>{
    return this.http.get(environment.apiUrl+'getDashboardCEO')
  }
// Gm Api
  createGM(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'create_Ceo_GM',data)
  }
  getGMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAll_Ceo_GM') 
  }
  updateGM(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'update_Ceo_GM/'+`${id}`,data);
  }
  updateGMStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusGM/'+`${id}`,null);
  }

  // SM API
  getSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getSMUnderParticularCEO') 
  }
  createSM(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createSM',data)
  }
  updateSM(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateSM/'+`${id}`,data);
  }
  updateSMStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSM/'+`${id}`,null);
  }

  // DSM API
  getDSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getDSMUnderParticularCEO') 
  }
  createDSM(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createDSM',data)
  }
  updateDSM(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateDSM/'+`${id}`,data);
  }
  updateDSMStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusDSM/'+`${id}`,null);
  }

  // SA API
  getSAList():Observable<any>{
    return this.http.get(environment.apiUrl+'getSAUnderParticularCEO') 
  }
  createSA(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createSA',data)
  }
  updateSA(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateSA/'+`${id}`,data);
  }
  updateSAStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSA/'+`${id}`,null);
  }
}
