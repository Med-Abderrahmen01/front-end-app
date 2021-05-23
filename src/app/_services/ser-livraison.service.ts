import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8087/delivery/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SerLivraisonService {

  constructor(private http:HttpClient) { }

  register(ser): Observable<any> {
    return this.http.post(AUTH_API + 'add', {
      name: ser.name,
      email: ser.email,
      phone: ser.phone,
      address: ser.address,
      nameCom: ser.nameCom,
      phoneCom: ser.phoneCom,
      designation:ser.designation
    }, httpOptions);
  }
  getService(){
    return this.http.get(AUTH_API + 'all')
  }
  remove(id:number):Observable<any>{
    return this.http.delete(`${'http://localhost:8085/delivery/del'}/${id}`);
  }
  findServiceId(id:number):Observable<any>{
    return this.http.get(`${'http://localhost:8085/delivery/find'}/${id}`)
  }

  updateService(id: number, value: any): Observable<Object> {
    return this.http.put(`${'http://localhost:8085/delivery/up'}`, value);
  }

}
