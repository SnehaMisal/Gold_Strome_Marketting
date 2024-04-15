import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminListService {

  apiurl='http://localhost:3000/admin/';
  constructor(private http: HttpClient) { }

  // Admin Login
  getAdminDashbaord():Observable<any>{
    return this.http.get(environment.apiUrl+'getAdminDashboard') 
  }
  // CEO API
  createAdmin(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createCEO',data)
  }
  getAdminList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllCEOs') 
  }
  updateAdmin(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateCEO/'+`${id}`,data);
  }
  getApprovalAdminList():Observable<any>{
    return this.http.get(this.apiurl) 
  }
  updateCEOtatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusCEO/'+`${id}`,null);
  }

  // GM API
  getGMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllGM') 
  }

  createGM(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createGM',data)
  }
  updateGM(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateGM/'+`${id}`,data);
  }
  updateGMtatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusGM/'+`${id}`,null);
  }

  //  SM API

  getSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllSM') 
  }
  updateSMstatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSM/'+`${id}`,null);
  }

  // DSM API
  getDSMList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllDSMInAdminMain') 
  }
  updateDSMstatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusDSM/'+`${id}`,null);
  }

  // SA API
  getSAList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllSAInAdminMain') 
  }
  updateSAstatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusSA/'+`${id}`,null);
  }

  // Voucher API
  getVoucherList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllVoucher') 
  }
  createVoucher(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'createVoucher',data)
  }
  updateVoucher(id: number, data:any):Observable<any>{
    return this.http.put(environment.apiUrl+'updateVoucher/'+`${id}`,data);
  }
  updateVoucherStatus(id: number):Observable<any>{
    return this.http.put(environment.apiUrl+'changeStatusVoucher/'+`${id}`,null);
  }
}
