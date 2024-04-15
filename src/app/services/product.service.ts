import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiurl='http://localhost:3000/product/';
  
  createProduct(data:any):Observable<any>{
    return this.http.post<any>(this.apiurl,data)
  }
  getProductList():Observable<any>{
    return this.http.get(this.apiurl) 
  }
  updateProduct(id: number, data:any):Observable<any>{
    return this.http.put(this.apiurl+`${id}`,data);
  }
}
