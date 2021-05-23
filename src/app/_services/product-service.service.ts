import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8087/product/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  api = "http://localhost:3000";
  constructor(/* private loadingService: LoadingService, */ private httpClient: HttpClient ) {}

  getService(){
    return this.httpClient.get(AUTH_API + 'allPro')
  }
  getAllProducts(): Observable<any> {
    return this.httpClient.get(this.api+"/products");
    
  }

  getSimillarProducts(): Observable<any> {
    return this.httpClient.get(this.api+"/simillarProducts");
  }

  public getSingleProduct(id: number): Observable<any> {
    return this.httpClient.get(this.api+"/products/"+id);
  }

  register(ser): Observable<any> {
    return this.httpClient.post(AUTH_API + 'addPro', {
      name: ser.name,
      price: ser.price,
      quantity: ser.quantity,
      designation: ser.designation,
      urlImage:ser.urlImage
    }, httpOptions);
  }

}
