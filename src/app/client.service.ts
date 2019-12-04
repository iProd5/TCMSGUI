import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Client} from './client';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
private clientUrl = 'https://boiling-bastion-30474.herokuapp.com/clients';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  /** GET clients from the server */
  getClient (): Observable<Client[]> {
  return this.http.get<Client[]>(this.clientUrl)
}
}
