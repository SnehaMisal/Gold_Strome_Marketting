import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaLoginService {

  constructor(private http: HttpClient) { }
  getBillList():Observable<any>{
    return this.http.get(environment.apiUrl+'getAllBills') 
  }
  createBill(data:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+'GenerateBill',data)
  }
}
