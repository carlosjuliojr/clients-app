import { Injectable } from '@angular/core';
import { Client } from './client/client.component';
import { CLIENTS } from './clients.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlEndPoint :string = 'http://localhost:8080/api/clients';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http : HttpClient) { }

  getClients() : Observable<Client[]> {
    //return of(CLIENTS);
    return this.http.get<Client[]>(this.urlEndPoint);
  }

  createClient(client: Client) : Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, client, {headers : this.httpHeaders})
  }

  getClientById(id : number) : Observable<Client> {
    //return of(CLIENTS);
    return this.http.get<Client>(this.urlEndPoint+'/'+id);
  }

  deleteClientById(id : number) : Observable<number> {
    console.log(id)
    return this.http.delete<number>(this.urlEndPoint+'/'+id)
  }

  editClient(client: Client) : Observable<Client> {
    return this.http.put<Client>((this.urlEndPoint + '/' + client.id), client, {headers : this.httpHeaders})
  }


}
