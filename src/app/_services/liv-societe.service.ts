import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8087/societe/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LivSocieteService {

  constructor(private http:HttpClient) { }

  register(ser): Observable<any> {
    return this.http.post(AUTH_API + 'add', {
      nameSoc: ser.name,
      emailSoc: ser.email,
      phoneSoc: ser.phone,
      addressSoc: ser.address,
      quantityLiv: ser.quantity,
      phoneDest: ser.phoneDest,
      designation:ser.designation
    }, httpOptions);
  }
}
